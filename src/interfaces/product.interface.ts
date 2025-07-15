export interface ProductItem {
	id: number;
	images: string[];
	slug: string,
	title: string;
	price: number;
	discount?: number;
	discountPrice?: number;
	label?: 'new' | 'best' | 'sell' | '';
	isFav?: boolean;
	description?: string;
	rating?: number;
	reviewsCount?: number;
	inStock?: boolean;
	category?: string;
	brand?: string;
	sku?: string;
	createdAt?: string;
	updatedAt?: string;
}
