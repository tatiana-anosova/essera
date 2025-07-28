'use client';
import { useState } from 'react';
import { PromocodeInputProps } from './PromocodeInput.props';
import styles from './PromocodeInput.module.css';
import { Button } from '@/components';
import clsx from 'clsx';

export const PromocodeInput = ({onApply, isLoading = false, error = '', className, ...props}: PromocodeInputProps) => {
	const [code, setCode] = useState('');

	const handleApply = (e: React.FormEvent) => {
		e.preventDefault();
		if (code.trim()) {
			onApply(code.trim());
		}
	}

	return (
		<form
			className={clsx(styles.promocode, className)}
			onSubmit={handleApply}
			{...props}
		>
			<input
				type="text"
				className={styles.input}
				placeholder="Promo code"
				value={code}
				onChange={e => setCode(e.target.value)}
				disabled={isLoading}
				autoComplete="off"
			/>
			<Button
				className={clsx(styles.apply)}
				type="submit"
				disabled={isLoading || !code.trim()}
			>
				{/*{isLoading ? 'Applying...' : 'Apply'}*/}
				Apply
			</Button>
			{/*<div className={clsx(styles.error)}>Wrong promocode</div>*/}
			{error && <div className={clsx(styles.error)}>{error}</div>}
		</form>
	);
};
