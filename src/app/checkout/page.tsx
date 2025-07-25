import styles from './page.module.css';
import clsx from 'clsx';
export default function Checkout() {

	return (
		<div className={clsx('page', styles.page)}>
			<main className={clsx(styles.main)}>
				<h1>Checkout</h1>

			</main>
		</div>
	);
}
