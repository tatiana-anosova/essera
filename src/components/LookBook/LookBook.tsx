import { LookBookProps } from './LookBook.props';
import styles from './LookBook.module.css';
import { LookBookCard } from '@/components';
import clsx from 'clsx';

export const LookBook = ({ children, className, ...props }: LookBookProps) => {
	const list = [
		{
			img: '/lookbook/lookbook-1.jpg',
			alt: 'lookbook-1',
			title: 'Where softness meets quiet confidence',
		},
		{
			img: '/lookbook/lookbook-2.jpg',
			alt: 'lookbook-2',
			title: 'For the mornings you choose yourself',
		},
		{
			img: '/lookbook/lookbook-3.jpg',
			alt: 'lookbook-3',
			title: 'Effortless calm in every detail',
		}
	]

	return (
		<section className={clsx(styles.lookbook, className)} {...props}>
			<div className={clsx(styles.wrapper)}>
				<h2 className={clsx(styles.title)}>Essera LookBook</h2>
				<div className={clsx(styles.text)}>This is how Essera lives — in soft mornings, quiet strength, and the
					beauty of being yourself. Show us your story: tag @essera.store to be featured.
				</div>
				<div className={clsx(styles.list)}>
					{list.map((item, idx) => (
						<LookBookCard
							key={item.img}
							className={clsx(styles.card)}
							img={item.img}
							alt={item.alt}
							title={item.title}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
