import {DetailedHTMLProps, HTMLAttributes} from 'react';
import { ProductItem } from '@/interfaces/product.interface';

export interface ProductCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: ProductItem;
	onFavoriteToggle?: (id: number) => void;
	onAddToCart?: (id: number) => void;
}
