import { LookBookCardProps } from './LookBookCard.props';
import styles from './LookBookCard.module.css';
import Image from 'next/image'
import clsx from 'clsx';

export const LookBookCard = ({img, alt, title, className, ...props}: LookBookCardProps) => {

	return (
		<div className={clsx(styles.card, className)} data-testid="lookbook-card" {...props}>
			<div className={clsx(styles.wrapper)}>
				<Image
					src={img || './lookbook/lookbook-1.jpg'}
					fill
					style={{ objectFit: 'cover' }}
					alt={alt || ''}
				/>
			</div>
			<p className={clsx(styles.title)}>{ title }</p>
		</div>
	);
};
