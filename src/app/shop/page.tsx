import styles from './page.module.css';
import clsx from 'clsx';

export default function Shop() {
	return (
		<div className={clsx('page', styles.page)}>
			<main className={styles.main}>
				<h1>Shop</h1>

			</main>
		</div>
	);
}
