'use client';
import { useState } from 'react';
import { ProductDetailsProps } from './ProductDetails.props';
import styles from './ProductDetails.module.css';
import Image from 'next/image';
import clsx from 'clsx';
import { useModal } from '@/contexts/ModalContext';
import { SizeItem, Button, Accordion } from '@/components';
import { mockProductDetails } from '@/data/details'

export const ProductDetails = ({product, className, onFavoriteToggle, onAddToCart, ...props}: ProductDetailsProps) => {
	const {
		title,
		basePrice,
		discount,
		discountPrice,
		label,
		variants,
	} = product;

	const modal = useModal();

	const images = variants[0].images;

	const handleImageClick = (image: string) => {
		modal.open('imageZoom', {
			src: image,
			alt: product.title,
			size: 'lg',
		});
	};

	function sortSizes(sizes: { size: string }[]): { size: string }[] {
		return sizes.slice().sort((a, b) => {
			const matchA = a.size.match(/^(\d+)([A-ZА-Я])$/i);
			const matchB = b.size.match(/^(\d+)([A-ZА-Я])$/i);

			if (!matchA || !matchB) return 0;

			const numA = parseInt(matchA[1], 10);
			const numB = parseInt(matchB[1], 10);

			if (numA !== numB) {
				return numA - numB;
			}

			return matchA[2].localeCompare(matchB[2]);
		});
	}

	const productSizes = sortSizes(product.variants[0].sizes);

	const [selectedSize, setSelectedSize] = useState<string | null>(null);

	const handleClick = () => {
		console.log('Add to bag');
	};

	return (
		<div className={clsx(styles.product, className)} {...props}>
			<div className={clsx(styles.list)}>
				{images.map(image => (
					<div className={clsx(styles.imageWrapper)}
						 key={image}
						 onClick={() => handleImageClick(image)}
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
				{label && <div className={clsx(styles.label)}>{label}</div>}
				<div className={clsx(styles.block, styles.row)}>
					<div className={clsx(styles.title)}>{title}</div>
					<div className={clsx(styles.price)}>${basePrice}</div>
				</div>
				<div className={clsx(styles.block)}>
					<div className={clsx(styles.row)}>
						<div>Size</div>
						<div>Size Guide</div>
					</div>
					<div className={clsx(styles.sizeList)}>
						{productSizes.map((sizeOption) => (
							<SizeItem
								key={sizeOption.size}
								className={clsx(styles.sizeItem)}
								sizeOption={sizeOption}
								selected={selectedSize === sizeOption.size}
								onSizeSelect={setSelectedSize}
							/>
						))}
					</div>
				</div>
				<div className={clsx(styles.block, styles.row)}>
					<Button
						className={clsx('wFull')}
						size="md"
						color="neutral"
						onClick={handleClick}
					>
						Add to bag
					</Button>
				</div>
				<div className={clsx(styles.block)}>
					<Accordion items={mockProductDetails}/>
				</div>
			</div>
		</div>
	);
};
