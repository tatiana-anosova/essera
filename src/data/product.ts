import { ProductItem } from '@/interfaces/product.interface'; // Убедись, что путь правильный

export const mockProduct: ProductItem = {
	id: 1,
	images: ['/products/product-1-1.jpg', '/products/product-1-2.jpg', '/products/product-1-3.jpg', '/products/product-1-4.jpg'],
	slug: 'white-bra',
	title: 'Where softness meets quiet confidence',
	price: 50,
	discount: 20,
	discountPrice: 40,
	label: 'new',
	isFav: false,
	description: 'Minimal lingerie for women who choose calm, confidence, and comfort.',
	rating: 4.8,
	reviewsCount: 120,
	inStock: true,
	category: 'bra',
	brand: 'Essera',
}
