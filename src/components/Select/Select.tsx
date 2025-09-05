import { forwardRef } from 'react';
import { SelectProps } from './Select.props';
import styles from './Select.module.css';
import clsx from 'clsx';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
	{ className, isInvalid, leftIcon, rightIcon, disabled, children, ...props },
	ref
) {
	return (
		<div className={styles.root}>
			{leftIcon && <span className={clsx(styles.icon, styles.iconLeft)}>{leftIcon}</span>}

			<select
				ref={ref}
				disabled={disabled}
				aria-invalid={!!isInvalid}
				className={clsx(
					styles.select,
					leftIcon && styles.withLeftIcon,
					rightIcon && styles.withRightIcon,
					isInvalid && styles.invalid,
					disabled && styles.disabled,
					className
				)}
				{...props}
			>
				{children}
			</select>

			{rightIcon && <span className={clsx(styles.icon, styles.iconRight)}>{rightIcon}</span>}
		</div>
	);
});
