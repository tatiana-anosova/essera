import { forwardRef } from 'react';
import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';
import clsx from 'clsx';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
	{ className, isInvalid, leftIcon, rightIcon, disabled, ...props },
	ref
) {
	return (
		<div className={styles.root}>
			{leftIcon && <span className={clsx(styles.icon, styles.iconLeft)}>{leftIcon}</span>}

			<textarea
				ref={ref}
				disabled={disabled}
				aria-invalid={!!isInvalid}
				className={clsx(
					styles.textarea,
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
