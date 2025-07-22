'use client';
import styles from './page.module.css';
import clsx from 'clsx';
import { mockProduct } from '@/data/product';
import { ProductDetails } from '@/components';

export default function Product() {
	return (
		<div className={clsx('page', styles.page)}>
			<main className={clsx(styles.main)}>
				<ProductDetails product={ mockProduct }/>
			</main>
		</div>
	);
}
