'use client';
import { CheckoutCartProps } from './CheckoutCart.props';
import styles from './CheckoutCart.module.css';
import clsx from 'clsx';
import { CheckoutProductItem, PromocodeInput } from '@/components';
import { mockCart } from '@/data/cart';
import { pluralize } from '@/utils/plural';

export const CheckoutCart = ({ className, ...props}: CheckoutCartProps) => {
	const handleApply = (code: string) => {
		console.log('Promocode:', code);
	}

	const subtotal = mockCart.reduce((sum, item) => sum + item.product.price, 0);

	return (
		<div className={clsx(styles.checkout, className)} {...props}>
			<div className={clsx(styles.list)}>
				{mockCart.map(item =>
					<CheckoutProductItem
						className={clsx(styles.item)}
						key={item.product.id}
						product={item.product}
						size={item.size}
						color={item.color}
						quantity={item.quantity}
					/>
				)}
			</div>
			<div className={clsx(styles.promocode)}>
				<PromocodeInput
					onApply={handleApply}
					isLoading={false}
					error={''}
				/>
			</div>
			<div className={clsx(styles.summary)}>
				<div className={clsx(styles.subtotal)}>
					<div className={clsx(styles.text)}>Subtotal · {pluralize(mockCart.length, 'item')}</div>
					<div className={clsx(styles.count)}>${subtotal}</div>
				</div>
				<div className={clsx(styles.shipping)}>
					<div className={clsx(styles.text)}>Shipping</div>
					<div className={clsx(styles.empty)}>Enter shipping address</div>
				</div>
				<div className={clsx(styles.total)}>
					<div>Total</div>
					<div>${subtotal}</div>
				</div>
			</div>
		</div>
	);
};
