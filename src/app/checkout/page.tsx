import styles from './page.module.css';
import clsx from 'clsx';
import { CheckoutCart, CheckoutForm } from '@/components';

export default function Checkout() {

	return (
		<div className={clsx('page', styles.page)}>
			<main className={clsx(styles.main)}>
				<h1>Checkout</h1>
				<div className={clsx(styles.flex)}>
					<CheckoutForm className={clsx(styles.col)} />
					<CheckoutCart className={clsx(styles.col)} />
				</div>
			</main>
		</div>
	);
}
