'use client';
import { CheckoutFormProps } from './CheckoutForm.props';
import styles from './CheckoutForm.module.css';
import clsx from 'clsx';

export const CheckoutForm = ({ className, ...props}: CheckoutFormProps) => {

	return (
		<div className={clsx(styles.checkout, className)} {...props}>
			<div>Checkout Form</div>
		</div>
	);
};
