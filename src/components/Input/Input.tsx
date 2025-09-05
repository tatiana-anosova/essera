import { forwardRef } from 'react';
import { InputProps } from './Input.props';
import styles from './Input.module.css';
import clsx from 'clsx';

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ className, isInvalid, leftIcon, rightIcon, disabled, ...props },
	ref
) {
	return (
		<div className={styles.root}>
			{leftIcon && <span className={clsx(styles.icon, styles.iconLeft)}>{leftIcon}</span>}

			<input
				ref={ref}
				disabled={disabled}
				aria-invalid={!!isInvalid}
				className={clsx(
					styles.input,
					leftIcon && styles.withLeftIcon,
					rightIcon && styles.withRightIcon,
					isInvalid && styles.invalid,
					disabled && styles.disabled,
					className
				)}
				{...props}
			/>

			{rightIcon && <span className={clsx(styles.icon, styles.iconRight)}>{rightIcon}</span>}
		</div>
	);
});
