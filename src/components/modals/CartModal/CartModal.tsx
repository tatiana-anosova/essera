'use client';
import { CartModalProps } from './CartModal.props';
import styles from './cartModal.module.css';
import clsx from 'clsx';
import {Button, CartItem, ProductCard} from '@/components';
import Link from 'next/link';
import { mockCart } from '@/data/cart';

export const CartModal = ({ onClose }: CartModalProps) => {
	const handleRemove = () => {
		console.log('remove from card');
	}

	const handleQuantityChange = () => {
		console.log('change quantity');
	}

	return (
		<div className={clsx(styles.container)}>
			<div className={clsx(styles.title)}>My Bag</div>
			<div className={clsx(styles.list)}>
				{mockCart.map(item => (
					<CartItem
						key={item.product.id}
						product={item.product}
						size={item.size}
						color={item.color}
						quantity={item.quantity}
						onRemove={handleRemove}
						onQuantityChange={handleQuantityChange}
					/>
				))}
			</div>
			<div className={clsx(styles.checkout)}>
				<Link href='/checkout'>
					<Button
						className={clsx('wFull')}
						size="md"
						color="primary"
					>
						Checkout
					</Button>
				</Link>
			</div>

		</div>
	);
};

