'use client';
import { useState } from 'react';
import { ContactFormProps } from './ContactForm.props';
import styles from './ContactForm.module.css';
import clsx from 'clsx';

export const ContactForm = ({ children, className, ...props }: ContactFormProps) => {
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// submit form to server
		setSubmitted(true);
	};

	return (
		<form className={clsx(styles.form)} onSubmit={handleSubmit} autoComplete="off">
			<div className={clsx(styles.field)}>
				<label htmlFor="name">Name</label>
				<input
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
				<input
					type="email"
					id="email"
					name="email"
					required
					placeholder="your@email.com"
				/>
			</div>
			<div className={clsx(styles.field)}>
				<label htmlFor="comment">Comment</label>
				<textarea
					id="comment"
					name="comment"
					required
					minLength={5}
					placeholder="Your comment"
					rows={4}
				/>
			</div>
			<button type="submit" className={clsx(styles.button)}>
				Send
			</button>
			{submitted && <div className={clsx(styles.success)}>Thanks for reaching us out!</div>}
		</form>
	);
};
