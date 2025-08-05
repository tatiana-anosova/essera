import { SizeItemProps } from './SizeItem.props';
import styles from './SizeItem.module.css';
import clsx from 'clsx';

export const SizeItem = ({ sizeOption, selected = false, onSizeSelect, children, className, ...props }: SizeItemProps) => {
	const { size, label, quantity, inStock } = sizeOption;
	const isDisabled = (inStock === false || quantity === 0);

	return (
		<div className={clsx(styles.item, className, {
			[styles.selected]: selected,
			[styles.disabled]: isDisabled,
		})}
			 onClick={() => !isDisabled && onSizeSelect?.(size)}
			 {...props}
		>
			{label || size}
		</div>
	);
};
