export interface ProductItem {
	id: number;
	images: string[];
	title: string;
	price: number;
	discount?: number;
	discountPrice?: number;
	label?: 'new' | 'best' | 'sell' | '';
	link: string;
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
