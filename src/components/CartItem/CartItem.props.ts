import {DetailedHTMLProps, HTMLAttributes} from 'react';
import { ProductItem } from '@/interfaces/product.interface';

export interface CartItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: ProductItem;
	size: string;      // chosen size
	color: string;     // chosen color
	quantity: number;  // chosen quantity
	onRemove: (productId: number, size: string, color: string) => void;
	onQuantityChange: (productId: number, size: string, color: string, newQty: number) => void;
}
