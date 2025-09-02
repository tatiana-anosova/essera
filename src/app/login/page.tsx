'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useUserStore } from '@/stores/userStore';
import { getUser } from '@/api/user';
import type { User } from '@/interfaces/user.interface';
import clsx from 'clsx';
import styles from './page.module.css';
import { Button } from '@/components';

export default function LoginPage() {
	const router = useRouter();
	const supabase = createClientComponentClient();

	const setAuthToken = useUserStore((s) => s.setAuthToken);
	const setProfile   = useUserStore((s) => s.setProfile);
	const clearUser    = useUserStore((s) => s.clearUser);

	const [email, setEmail]       = useState('');
	const [password, setPassword] = useState('');
	const [pending, setPending]   = useState(false);
	const [error, setError]       = useState<string | null>(null);

	const afterAuthSuccess = async () => {
		const { data: { session } } = await supabase.auth.getSession();
		setAuthToken(session?.access_token ?? null);

		try {
			const me: User = await getUser();
			setProfile(me);
		} catch {
			setProfile(null);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!email || !password || pending) return;

		setError(null);
		setPending(true);
		try {
			const { error } = await supabase.auth.signInWithPassword({ email, password });
			if (error) {
				setError(error.message);
				return;
			}
			await afterAuthSuccess();
			router.replace('/');
		} catch (e: any) {
			setError(e?.message ?? 'Something went wrong');
		} finally {
			setPending(false);
		}
	};

	const handleLogout = async () => {
		await supabase.auth.signOut();
		clearUser();
	};

	return (
		<main className={styles.auth}>
			<section className={clsx(styles.card, pending && styles.cardBusy)}>
				<h1 className={styles.title}>Sign in</h1>
				<p className={styles.subtitle}>Welcome back to Essera.</p>

				{error && (
					<div className={clsx(styles.alert, styles.alertError)} aria-live="polite">
						{error}
					</div>
				)}

				<form className={styles.form} onSubmit={handleSubmit}>
					<label className={styles.field}>
						<span className={styles.fieldLabel}>Email</span>
						<input
							className={styles.fieldInput}
							type="email"
							autoComplete="email"
							placeholder="you@example.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							disabled={pending}
							required
						/>
					</label>

					<label className={styles.field}>
						<span className={styles.fieldLabel}>Password</span>
						<input
							className={styles.fieldInput}
							type="password"
							autoComplete="current-password"
							placeholder="••••••••"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							disabled={pending}
							required
						/>
					</label>

					<Button
						type="submit"
						size="md"
						color="primary"
						disabled={pending || !email || !password}
					>
						{pending ? 'Signing in…' : 'Sign in'}
					</Button>
				</form>

				{/*<div className={styles.divider}><span>or</span></div>*/}

				{/*<div className={styles.stack}>*/}
				{/*	<Button size="md" color="neutral" disabled={pending}>*/}
				{/*		Continue with GitHub*/}
				{/*	</Button>*/}
				{/*	<Button size="md" color="transparent" disabled={pending || !email}>*/}
				{/*		Send magic link*/}
				{/*	</Button>*/}
				{/*	<Button size="md" color="transparent" onClick={handleLogout}>*/}
				{/*		Logout*/}
				{/*	</Button>*/}
				{/*</div>*/}

				<p className={styles.note}>
					By continuing you agree to our{' '}
					<a href="/terms-of-service" className={styles.link}>Terms</a> and{' '}
					<a href="/privacy-policy" className={styles.link}>Privacy Policy</a>.
				</p>
			</section>
		</main>
	);
}
