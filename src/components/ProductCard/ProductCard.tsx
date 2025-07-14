'use client';
import { ProductCardProps } from './ProductCard.props';
import styles from './ProductCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export const ProductCard = ({product, className, onFavoriteToggle, onAddToCart, ...props}: ProductCardProps) => {
	const {
		id,
		images,
		title,
		price,
		discount,
		discountPrice,
		label,
		link,
		isFav,
		inStock = true
	} = product;

	const mainImage = images?.[0] || '/placeholder-image.webp';

	return (
		<div className={clsx(styles.card, className)} {...props}>
			<Link href={link} className={clsx(styles.link)}>
				<div className={clsx(styles.imageWrapper)}>
					<Image
						src={mainImage}
						fill
						alt={title}
					/>
					{/*{!inStock && <div className={styles.outOfStock}>out of stock</div>}*/}
				</div>
				<div className={styles.details}>
					{label && <div className={clsx(styles.label, styles[`label--${label}`])}>{label}</div>}
					<h3 className={styles.title}>{title}</h3>
					<div className={styles.priceBlock}>
						{discountPrice ? (
							<>
								{/*<span className={styles.discountPrice}>$ {discountPrice}</span>*/}
								<span className={styles.originalPrice}>$ {price}</span>
								{/*{discount && <span className={styles.discount}>-{discount}%</span>}*/}
							</>
						) : (
							<span className={styles.price}>$ {price}</span>
						)}
					</div>
				</div>
			</Link>

			{/* Кнопки действий */}
			<div className={styles.actions}>
				{onFavoriteToggle && (
					<button
						className={clsx(styles.favButton, { [styles.favActive]: isFav })}
						onClick={() => onFavoriteToggle(id)}
						aria-label="Добавить в избранное"
					>
						♡
					</button>
				)}
				{onAddToCart && inStock && (
					<button
						className={styles.cartButton}
						onClick={() => onAddToCart(id)}
					>
						В корзину
					</button>
				)}
			</div>
		</div>
	);
};
