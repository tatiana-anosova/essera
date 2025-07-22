import styles from './page.module.css';
import clsx from 'clsx';
import Image from 'next/image'
import { ContactForm } from '@/components';

export default function Contact() {
	return (
		<div className={clsx('page', styles.page)}>
			<main className={clsx(styles.main)}>
				<h1>Contact</h1>
				<div className={clsx(styles.flex)}>
					<div className={clsx(styles.contact)}>
						<ContactForm />
					</div>
					<Image src='/img/IMGL8305_.jpg' alt="Essera logo" width={466} height={700} />
				</div>
			</main>
		</div>
	);
}
