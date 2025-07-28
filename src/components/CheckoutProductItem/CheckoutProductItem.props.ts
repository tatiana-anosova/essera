import {DetailedHTMLProps, HTMLAttributes} from 'react';
import { ProductItem } from '@/interfaces/product.interface';

export interface CheckoutProductItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: ProductItem;
	size: string;
	color: string;
	quantity: number;
}
