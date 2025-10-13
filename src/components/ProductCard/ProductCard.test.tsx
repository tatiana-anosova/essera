import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProductCard } from "@/components/ProductCard/ProductCard";
import type { ProductCardProps } from './ProductCard.props';

jest.mock('next/image');
jest.mock('next/link');

const makeProduct = (
	overrides: Partial<ProductCardProps['product']> = {}
): ProductCardProps['product'] => ({
	id: 1,
	slug: 'milana-bra',
	title: 'Milana Bra',
	basePrice: 50,
	label: 'new',
	isFav: false,
	variants: [
		{
			id: 1,
			color: 'Black',
			colorHex: '#000000',
			images: ['/img1.jpg', '/img2.jpg', '/img3.jpg'],
			sizes: [],
		},
	],
	...overrides,
});

describe('<ProductCard />', () => {
	it('renders title, price and link', () => {
		const product = makeProduct();
		render(<ProductCard product={product} />);

		expect(screen.getByRole('heading', { name: /milana bra/i })).toBeInTheDocument();
		expect(screen.getByText('$50')).toBeInTheDocument();

		const link = screen.getByRole('link', { name: /milana bra/i });
		expect(link).toHaveAttribute('href', '/products/milana-bra');
	});

	it('next/prev switches images and prevImage appears during transition', async () => {
		jest.useFakeTimers();
		const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

		const product = makeProduct();
		render(<ProductCard product={product} />);

		const img = screen.getAllByRole('img', { name: /milana bra/i })[0];
		expect(img).toHaveAttribute('src', '/img1.jpg');

		await user.click(screen.getByText('arrow_forward_ios'));

		// during animation
		const imgsDuring = screen.getAllByRole('img', { name: /milana bra/i });
		expect(imgsDuring.length).toBeGreaterThanOrEqual(2);
		const duringSrcs = imgsDuring.map((el) => el.getAttribute('src'));
		expect(duringSrcs).toEqual(expect.arrayContaining(['/img1.jpg', '/img2.jpg']));

		// after animation
		jest.advanceTimersByTime(400);
		await waitFor(() => {
			expect(screen.getAllByRole('img', { name: /milana bra/i }).length).toBe(1);
		})
		expect(screen.getByRole('img', { name: /milana bra/i })).toHaveAttribute('src', '/img2.jpg');

		// go to prev image
		await user.click(screen.getByText('arrow_back_ios'));
		jest.advanceTimersByTime(400);
		await waitFor(() => {
			expect(screen.getAllByRole('img', { name: /milana bra/i }).length).toBe(1);

		})
		expect(screen.getByRole('img', { name: /milana bra/i })).toHaveAttribute('src', '/img1.jpg');
	})

	it('hides arrows when only one image', () => {
		const oneImg = makeProduct({
			variants: [{ id: 1, color: 'Black', colorHex: '#000', images: ['/only.jpg'], sizes: [] }],
		});
		render(<ProductCard product={oneImg} />);

		expect(screen.queryByText('arrow_back_ios')).toBeNull();
		expect(screen.queryByText('arrow_forward_ios')).toBeNull();
	})

	it('renders label when provided', () => {
		const productWithLabel = makeProduct({ label: 'new' });
		render(<ProductCard product={productWithLabel} />);
		expect(screen.getByText('new')).toBeInTheDocument();
	});

	it('does not render label when not provided', () => {
		const productWithoutLabel = makeProduct({ label: '' });
		render(<ProductCard product={productWithoutLabel} />);
		expect(screen.queryByText(/new|best|sell/i)).toBeNull();
	})
})

afterEach(() => {
	jest.useRealTimers();
});
