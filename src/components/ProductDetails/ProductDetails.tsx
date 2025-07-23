'use client';
import { useState } from 'react';
import { ProductDetailsProps } from './ProductDetails.props';
import styles from './ProductDetails.module.css';
import Image from 'next/image';
import clsx from 'clsx';
import { useModal } from '@/contexts/ModalContext';
import { SizeItem, Button, Accordion } from '@/components';
import { SizeOption } from '@/interfaces/size.interface';
import { mockProductDetails } from '@/data/details'

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

	const modal = useModal();

	const handleImageClick = (image: string) => {
		modal.open('imageZoom', {
			src: image,
			alt: product.title,
			size: 'lg'
		});
	};

	// mock data
	const productSizes: SizeOption[] = [
		{ value: 'XS', stock: 2 },
		{ value: 'S', stock: 45 },
		{ value: 'M', stock: 0 },
		{ value: 'L', stock: 7 },
	];

	const [selectedSize, setSelectedSize] = useState<string | null>(null);

	const handleClick = () => {
		console.log('Add to bag');
	};

	return (
		<div className={clsx(styles.product, className)} {...props}>
			<div className={clsx(styles.list)}>
				{product.images.map(image => (
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
					<div className={clsx(styles.price)}>${price}</div>
				</div>
				<div className={clsx(styles.block)}>
					<div className={clsx(styles.row)}>
						<div>Size</div>
						<div>Size Guide</div>
					</div>
					<div className={clsx(styles.sizeList)}>
						{productSizes.map((sizeOption) => (
							<SizeItem
								key={sizeOption.value}
								className={clsx(styles.sizeItem)}
								sizeOption={sizeOption}
								selected={selectedSize === sizeOption.value}
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
