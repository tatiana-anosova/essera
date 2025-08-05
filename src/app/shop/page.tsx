import styles from './page.module.css';
import clsx from 'clsx';
import { fetchProducts } from '@/api/products';
import { ProductList } from '@/components';

export default async function Shop() {
	const products = await fetchProducts();

	return (
		<div className={clsx('page', styles.page)}>
			<main className={clsx(styles.main)}>
				<h1>Shop</h1>
				<div className={clsx(styles.list)}>
					<ProductList products={products} />
				</div>
			</main>
		</div>
	);
}
