import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import clsx from 'clsx';
import { InstagramIcon } from '@/components';
import Link from 'next/link';

export const Footer = ({ children, className, ...props }: FooterProps) => {
	return (
		<footer className={clsx(styles.footer, className)} {...props}>
			<div className={styles.top}>
				<div className={styles.infoCol}>
					<div className={styles.title}>Info</div>
					<ul className={styles.list}>
						<li>
							<Link href="/size-guide">Size Guide</Link></li>
						<li>
							<Link href="/terms-of-service">Term of Service</Link>
						</li>
						<li><Link href="/privacy-policy">Privacy Policy</Link></li>
						<li><Link href="/contact">Contact Information</Link></li>
					</ul>
				</div>
				<div className={styles.iconsCol}>
					<a href="https://instagram.com/essera.store" target="_blank" rel="noopener noreferrer">
						<InstagramIcon className={clsx(styles.icon)} />
					</a>
				</div>
			</div>
			<div className={styles.bottom}>
				&copy; 2025 Essera Store
			</div>
		</footer>
	);
};
