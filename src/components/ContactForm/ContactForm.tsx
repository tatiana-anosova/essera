'use client';
import { useState } from 'react';
import { ContactFormProps } from './ContactForm.props';
import styles from './ContactForm.module.css';
import clsx from 'clsx';
import { Input, Textarea, Button } from '@/components';
import { createContactMessage } from '@/api/contactMessages';

export const ContactForm = ({ children, className, ...props }: ContactFormProps) => {
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading]   = useState(false);
	const [error, setError]       = useState<string | null>(null);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setError(null);
		setLoading(true);

		const form = e.currentTarget;
		const fd = new FormData(form);

		try {
			await createContactMessage({
				name: (fd.get('name') as string) ?? '',
				email: (fd.get('email') as string) ?? '',
				comment: (fd.get('comment') as string) ?? '',
			});

			setSubmitted(true);
			form.reset();
		} catch (err: any) {
			setError(err.message ?? 'Failed to send');
		} finally {
			setLoading(false);
		}
	}

	return (
		<form className={clsx(styles.form)} onSubmit={handleSubmit} autoComplete="off">
			<div className={clsx(styles.field)}>
				<label htmlFor="name">Name</label>
				<Input
					type="text"
					id="name"
					name="name"
					required
					minLength={2}
					placeholder="Your name"
				/>
			</div>
			<div className={clsx(styles.field)}>
				<label htmlFor="email">Email</label>
				<Input
					type="email"
					id="email"
					name="email"
					required
					placeholder="your@email.com"
				/>
			</div>
			<div className={clsx(styles.field)}>
				<label htmlFor="comment">Comment</label>
				<Textarea
					id="comment"
					name="comment"
					required
					minLength={5}
					placeholder="Your comment"
					rows={4}
				/>
			</div>
			<Button type="submit" color="primary">
				Send
			</Button>
			{submitted && <div className={clsx(styles.success)}>Thanks for reaching us out!</div>}
			{error && <div className={clsx(styles.error)}>{error}</div>}
		</form>
	);
};
