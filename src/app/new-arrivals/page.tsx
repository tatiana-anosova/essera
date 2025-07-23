import styles from './page.module.css';
import clsx from 'clsx';
import { mockProducts } from '@/data/products';
import { ProductList } from '@/components';

export default function NewArrivals() {
	const productList = mockProducts.filter(product => product.label === 'new');

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
