'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { CheckoutProductItemProps } from './CheckoutProductItem.props';
import styles from './CheckoutProductItem.module.css';

export const CheckoutProductItem = ({product, size, color, quantity, className, ...props}: CheckoutProductItemProps) => {
	// Safe fallback cover so UI never crashes on empty images
	const cover = product.images?.[0] ?? '/images/placeholder.png';

	return (
		<div className={clsx(styles.item, className)} {...props}>
			<div className={clsx(styles.imageWrapper)}>
				<Image
					className={clsx(styles.image)}
					src={cover}
					alt={product.title}
					width={120}
					height={150}
				/>
				<div className={clsx(styles.quantity)}>{quantity}</div>
			</div>

			<div className={clsx(styles.info)}>
				<div className={clsx(styles.title)}>{product.title}</div>
				<div className={clsx(styles.size)}>{size}</div>
				<div className={clsx(styles.color)}>color: {color}</div>
			</div>

			<div className={clsx(styles.price)}>
				${product.price.toFixed(2)}
			</div>
		</div>
	);
};
