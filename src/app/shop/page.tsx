'use client';
import styles from './page.module.css';
import clsx from 'clsx';
import { mockProducts } from '@/data/products';
import { ProductList } from '@/components';

export default function Shop() {
	return (
		<div className={clsx('page', styles.page)}>
			<main className={styles.main}>
				<h1>Shop</h1>
				<div className={clsx(styles.list)}>
					<ProductList products={mockProducts} />
				</div>
			</main>
		</div>
	);
}
