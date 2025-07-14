'use client';
import { ProductListProps } from './ProductList.props';
import styles from './ProductList.module.css';
import { ProductCard } from '@/components';
import clsx from 'clsx';

export const ProductList = ({ products }: ProductListProps) => {

	return (
		<div className={clsx(styles.list)}>
			{products.map(product => (
				<ProductCard
					key={product.id}
					product={product}
					// ...onFavoriteToggle, onAddToCart ...
				/>
			))}
		</div>
	);
};
