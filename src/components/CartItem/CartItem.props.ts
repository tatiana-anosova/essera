import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CartProduct } from '@/interfaces/cart.interface';

export interface CartItemProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: CartProduct;
	size: string;
	color: string;
	quantity: number;
	onRemove: (productId: number, size: string, color: string) => void;
	onQuantityChange: (
		productId: number,
		size: string,
		color: string,
		newQty: number
	) => void;
}
