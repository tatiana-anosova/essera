import styles from './page.module.css';
import clsx from 'clsx';
import { fetchProducts } from '@/api/products';
import { ProductList } from '@/components';

export default async function NewArrivals() {
	const products = await fetchProducts();
	const productList = products.filter(product => product.label === 'new');

	return (
		<div className={clsx('page', styles.page)}>
			<main className={clsx(styles.main)}>
				<h1>New Arrivals</h1>
				<div className={clsx(styles.list)}>
					<ProductList products={productList}/>
				</div>
			</main>
		</div>
	);
}
