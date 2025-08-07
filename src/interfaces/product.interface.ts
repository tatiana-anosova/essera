import { SizeOption } from "@/interfaces/size.interface";

export interface ProductItem {
	id: number;
	slug: string,
	title: string;
	description?: string;
	basePrice: number;
	discount?: number;
	discountPrice?: number;
	label?: 'new' | 'best' | 'sell' | '';
	isFav?: boolean;
	rating?: number;
	reviewsCount?: number;
	category?: string;
	brand?: string;
	variants: Variants[];
	createdAt?: string;
	updatedAt?: string;
}

export interface Details {
	id: number;
	productId: number;
	key: string;
	title: string;
	content: string;
}

export interface Variants {
	id: number;
	color: string;
	colorHex: string;
	images: string[];
	sizes: SizeOption[];
}
