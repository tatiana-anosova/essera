'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useScrollY } from '@/hooks/useScrollY';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import Image from 'next/image'
import clsx from 'clsx';
import Link from 'next/link';

export const Header = ({ children, className, ...props }: HeaderProps) => {
	const pathname = usePathname();
	const isHome = pathname === '/';

	const scrollY = useScrollY()
	const isScrolled = scrollY > 50

	const logoSrc = !isHome
		? '/logo/essera-black-2.png'
		: isScrolled
			? '/logo/essera-black-2.png'
			: '/logo/essera-white-2.png'

	const [isSearchOpen, setIsSearchOpen] = useState(false);

	return (
		<header className={clsx(styles.header, {[styles.transparent]: isHome}, { [styles.scrolled]: isScrolled }, className)} {...props}>
			<nav className={clsx(styles.nav)}>
				<ul className={clsx(styles.list)}>
					<li><Link href='/new-arrivals'>new</Link></li>
					<li><Link href='/shop'>shop</Link></li>
				</ul>
			</nav>
			<div className={clsx(styles.logo)}>
				<Link href="/">
					<Image src={logoSrc} alt="Essera logo" width={230} height={64} />
				</Link>
			</div>
			<div className={clsx(styles.profile)}>
				{/*<span className={clsx("material-icons-outlined", styles.icon)}>search</span>*/}
				<span
					className={clsx('material-icons-outlined', styles.icon)}
					onClick={() => setIsSearchOpen((v) => !v)}
					tabIndex={0}
					role="button"
					aria-label="Open search"
					style={{cursor: 'pointer'}}
				>
				  search
				</span>
				<Link href='/checkout'>
					<span className={clsx("material-icons-outlined", styles.icon, styles.cart)}>shopping_bag</span>
				</Link>
			</div>
			{isSearchOpen && (
				<div className={styles.searchBlock}>
					<input
						type="text"
						placeholder="Search…"
						className={styles.searchInput}
						autoFocus
					/>
					<button
						className={styles.closeSearch}
						onClick={() => setIsSearchOpen(false)}
						aria-label="Close search"
						type="button"
					>
						<span className="material-icons-outlined">close</span>
					</button>
				</div>
			)}
		</header>
	);
};
