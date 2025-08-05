import { ProductItem } from '@/interfaces/product.interface'; // Убедись, что путь правильный

export const mockProduct: ProductItem = {
	id: 1,
	slug: 'white-bra',
	title: 'Where softness meets quiet confidence',
	basePrice: 50,
	discount: 20,
	discountPrice: 40,
	label: 'new',
	isFav: false,
	description: 'Minimal lingerie for women who choose calm, confidence, and comfort.',
	rating: 4.8,
	reviewsCount: 120,
	category: 'bra',
	brand: 'Essera',
	variants: [
		{
			id: 101,
			color: 'black',
			colorHex: '#000000',
			images: ['/products/product-1-1.jpg', '/products/product-1-2.jpg', '/products/product-1-3.jpg', '/products/product-1-4.jpg'],
			sizes: [
				{
					size: 'xs',
					label: 'XS',
					quantity: 10,
					inStock: true,
				},
				{
					size: 's',
					label: 'S',
					quantity: 10,
					inStock: true,
				},
				{
					size: 'm',
					label: 'M',
					quantity: 0,
					inStock: false,

				},
				{
					size: 'l',
					label: 'L',
					quantity: 10,
					inStock: true,
				},
			]
		}
	],
}
