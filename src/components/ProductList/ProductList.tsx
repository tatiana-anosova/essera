'use client';
import { ProductListProps } from './ProductList.props';
import styles from './ProductList.module.css';
import { ProductCard } from '@/components';
import clsx from 'clsx';

export const ProductList = ({ products }: ProductListProps) => {
	const onFavoriteToggle = (id: Number) => {
		console.log('Toggle favorite:', id)
	}

	const onAddToCart = (id: Number) => {
		console.log('onAddToCart:', id)
	}

	return (
		<div className={clsx(styles.list)}>
			{products.map(product => (
				<ProductCard
					key={product.id}
					product={product}
					onFavoriteToggle = {onFavoriteToggle}
					onAddToCart = {onAddToCart}
				/>
			))}
		</div>
	);
};
