'use client';
import { DeliveryFormProps } from './DeliveryForm.props';
import styles from './DeliveryForm.module.css';
import clsx from 'clsx';

export const DeliveryForm = ({ children, className, ...props }: DeliveryFormProps) => {

	return (
		<form className={clsx(styles.form)} autoComplete="off">
			<div className={clsx(styles.field)}>
				{/*<label htmlFor="country">Country/Region</label>*/}
				<input
					type="text"
					id="country"
					name="country"
					required
					minLength={2}
					placeholder="Country/Region"
				/>
			</div>
			<div className={clsx(styles.group)}>
				<div className={clsx(styles.field)}>
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						required
						minLength={2}
						placeholder="First Name"
					/>
				</div>
				<div className={clsx(styles.field)}>
					<label htmlFor="lastName">Last Name</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						required
						minLength={2}
						placeholder="Last Name"
					/>
				</div>
			</div>
			<div className={clsx(styles.field)}>
				<label htmlFor="address">Address</label>
				<input
					type="text"
					id="address"
					name="address"
					required
					minLength={2}
					placeholder="Address"
				/>
			</div>
			<div className={clsx(styles.field)}>
				<label htmlFor="apartments">Apartment, suite, etc. (optional)</label>
				<input
					type="text"
					id="apartments"
					name="apartments"
					required
					minLength={2}
					placeholder="Apartment, suite, etc. (optional)"
				/>
			</div>
			<div className={clsx(styles.group)}>
				<div className={clsx(styles.field)}>
					<label htmlFor="city">City</label>
					<input
						type="text"
						id="city"
						name="city"
						required
						minLength={2}
						placeholder="City"
					/>
				</div>
				<div className={clsx(styles.field)}>
					<label htmlFor="state">State</label>
					<input
						type="text"
						id="state"
						name="state"
						required
						minLength={2}
						placeholder="State"
					/>
				</div>
				<div className={clsx(styles.field)}>
					<label htmlFor="zip">ZIP Code</label>
					<input
						type="text"
						id="zip"
						name="zip"
						required
						minLength={2}
						placeholder="ZIP Code"
					/>
				</div>
			</div>
			<div className={clsx(styles.field)}>
				<label htmlFor="phone">Phone</label>
				<input
					type="text"
					id="phone"
					name="phone"
					required
					minLength={2}
					placeholder="Phone"
				/>
			</div>

			{/*<div className={clsx(styles.field)}>*/}
			{/*	<label htmlFor="email">Email</label>*/}
			{/*	<input*/}
			{/*		type="email"*/}
			{/*		id="email"*/}
			{/*		name="email"*/}
			{/*		required*/}
			{/*		placeholder="your@email.com"*/}
			{/*	/>*/}
			{/*</div>*/}

		</form>
	);
};
