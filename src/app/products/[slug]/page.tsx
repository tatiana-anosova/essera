import styles from './page.module.css';
import clsx from 'clsx';
// import { mockProduct } from '@/data/product';
import { ProductDetails } from '@/components';
import { fetchProductBySlug } from '@/api/products';

export default async function Product({params}: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const product = await fetchProductBySlug(slug);

	return (
		<div className={clsx('page', styles.page)}>
			<main className={clsx(styles.main)}>
				<ProductDetails product={ product }/>
			</main>
		</div>
	);
}
