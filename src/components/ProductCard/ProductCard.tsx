'use client';
import { useState } from 'react';
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

	const [current, setCurrent] = useState(0);
	const [prev, setPrev] = useState<number | null>(null);
	const [direction, setDirection] = useState<1 | -1>(1);

	const handleSwitch = (nextIdx: number, dir: 1 | -1) => {
		if (nextIdx === current) return;
		setPrev(current);
		setDirection(dir);
		setCurrent(nextIdx);
		setTimeout(() => setPrev(null), 400); // 400ms = время анимации
	};

	const showPrev = (e: React.MouseEvent) => {
		e.stopPropagation();
		handleSwitch(current === 0 ? images.length - 1 : current - 1, -1);
	};

	const showNext = (e: React.MouseEvent) => {
		e.stopPropagation();
		handleSwitch(current === images.length - 1 ? 0 : current + 1, 1);
	};

	const mainImage = images?.[current] || '/placeholder-image.webp';
	const prevImage = prev !== null ? images[prev] : null;

	return (
		<div className={clsx(styles.card, className)} {...props}>
			<div className={clsx(styles.imageWrapper)}>
				{prevImage && (
					<Image
						key={prev}
						src={prevImage}
						fill
						alt={title}
						className={clsx(
							styles.slideImage,
							direction === 1 ? styles.slideOutLeft : styles.slideOutRight
						)}
						draggable={false}
					/>
				)}
				<Image
					key={current}
					src={mainImage}
					fill
					alt={title}
					className={clsx(
						styles.slideImage,
						prev !== null
							? direction === 1
								? styles.slideInRight
								: styles.slideInLeft
							: ''
					)}
					draggable={false}
				/>
				{images.length > 1 && (
					<>
						<span
							className={clsx("material-icons-outlined", styles.arrow, styles.arrowLeft)}
							onClick={showPrev}
							tabIndex={0}
						>
							arrow_back_ios
						</span>
						<span
							className={clsx("material-icons-outlined", styles.arrow, styles.arrowRight)}
							onClick={showNext}
							tabIndex={0}
						>
							arrow_forward_ios
						</span>
						{/*<div className={styles.dots}>*/}
						{/*	{images.map((_, idx) => (*/}
						{/*		<span*/}
						{/*			key={idx}*/}
						{/*			className={clsx(styles.dot, {[styles.activeDot]: idx === current})}*/}
						{/*			onClick={(e) => {*/}
						{/*				e.stopPropagation();*/}
						{/*				setCurrent(idx);*/}
						{/*			}}*/}
						{/*		/>*/}
						{/*	))}*/}
						{/*</div>*/}
					</>
				)}
				{/*{!inStock && <div className={styles.outOfStock}>out of stock</div>}*/}
				{onFavoriteToggle && (
					<span
						className={clsx(styles.favIcon, "material-icons-outlined", {[styles.favActive]: isFav})}
						onClick={() => onFavoriteToggle(id)}
					>
						{isFav ? 'favorite' : 'favorite_border'}
					</span>
				)}
			</div>
			<div className={styles.details}>
				{label && <div className={clsx(styles.label, styles[`label--${label}`])}>{label}</div>}
				<Link href={link} className={clsx(styles.link)}>
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
				</Link>
			</div>

			{/* Actions */}
			<div className={styles.actions}>
				{/*{onAddToCart && inStock && (*/}
				{/*	<button*/}
				{/*		className={styles.cartButton}*/}
				{/*		onClick={() => onAddToCart(id)}*/}
				{/*	>*/}
				{/*		Add to cart*/}
				{/*	</button>*/}
				{/*)}*/}
			</div>
		</div>
	);
};
