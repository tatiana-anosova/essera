import {DetailedHTMLProps, HTMLAttributes} from 'react';
import { ProductItem } from '@/interfaces/product.interface';

export interface ProductDetailsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: ProductItem;
	onFavoriteToggle?: (id: number) => void;
}
