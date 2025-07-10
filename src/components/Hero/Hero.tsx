import { HeroProps } from './Hero.props';
import styles from './Hero.module.css';
import clsx from 'clsx';
import Image from 'next/image'

export const Hero = ({ children, className, ...props }: HeroProps) => {
	return (
		<section className={clsx(styles.hero, className)}>
			<Image src="/hero.jpg"
				alt="Hero"
				fill
				style={{objectFit: 'cover'}}
				priority
			/>
			<div className={clsx(styles.overlay)}>
				<h1 className={clsx(styles.title)}>Confidence in every thread</h1>
				<p className={clsx(styles.subtitle)}>Minimal lingerie for women who choose calm, confidence, and comfort.</p>
			</div>
		</section>
	);
};
