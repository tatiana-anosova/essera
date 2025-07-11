import styles from './page.module.css';
import clsx from 'clsx';

export default function NewArrivals() {
	return (
		<div className={clsx('page', styles.page)}>
			<main className={styles.main}>
				<h1>New Arrivals</h1>

			</main>
		</div>
	);
}
