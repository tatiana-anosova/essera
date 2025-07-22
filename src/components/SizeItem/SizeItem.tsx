import { SizeItemProps } from './SizeItem.props';
import styles from './SizeItem.module.css';
import clsx from 'clsx';

export const SizeItem = ({ sizeOption, selected = false, onSizeSelect, children, className, ...props }: SizeItemProps) => {
	const { value, label, stock } = sizeOption;
	const isDisabled = stock === 0;

	return (
		<div className={clsx(styles.item, className, {
			[styles.selected]: selected,
			[styles.disabled]: isDisabled,
		})}
			 onClick={() => !isDisabled && onSizeSelect?.(value)}
			 {...props}
		>
			{label || value}
		</div>
	);
};
