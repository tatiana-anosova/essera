import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import clsx from 'clsx';

export const Button = ({  size = 'md', color = 'transparent', disabled = false, children, className, ...props }: ButtonProps) => {

	return (
		<button
			className={clsx(
				styles.button,
				styles[size],
				styles[color],
				{[styles.disabled]: disabled},
				className
			)}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
};
