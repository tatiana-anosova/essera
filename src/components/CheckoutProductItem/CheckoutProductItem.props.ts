import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CartProduct } from '@/interfaces/cart.interface';

export interface CheckoutProductItemProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: CartProduct;
	size: string;
	color: string;
	quantity: number;
}
