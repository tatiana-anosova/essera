import styles from "./page.module.css";
import clsx from "clsx";

export default function Contact() {
	return (
		<div className={clsx('page', styles.page)}>
			<main className={styles.main}>
				<h1>Contact</h1>
			</main>
		</div>
	);
}
