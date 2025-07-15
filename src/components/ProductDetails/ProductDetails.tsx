'use client';
import { ProductDetailsProps } from './ProductDetails.props';
import styles from './ProductDetails.module.css';
import Image from 'next/image';
import clsx from 'clsx';
import {ProductCard} from "@/components";

export const ProductDetails = ({product, className, onFavoriteToggle, onAddToCart, ...props}: ProductDetailsProps) => {
	const {
		id,
		images,
		slug,
		title,
		price,
		discount,
		discountPrice,
		label,
		isFav,
		inStock = true
	} = product;

	return (
		<div className={clsx(styles.product, className)} {...props}>
			<div className={clsx(styles.list)}>
				{product.images.map(image => (
					<div className={clsx(styles.imageWrapper)}
						 key={image}
					>
						<Image
							src={image}
							fill
							alt={title}
							className={clsx(styles.image)}
						/>
					</div>
				))}
			</div>
			<div className={clsx(styles.details)}>
				{ label && <div className={clsx(styles.label)}>{label}</div>}
				<div className={clsx(styles.title)}>{title}</div>
				<div className={clsx(styles.price)}>${price}</div>
			</div>
		</div>
	);
};
