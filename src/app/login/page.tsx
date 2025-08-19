'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function LoginPage() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleLogin = async () => {
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			setError(error.message);
		} else {
			router.push('/dashboard'); // или куда тебе нужно
		}
	};

	return (
		<div style={{ padding: '2rem' }}>
			<h1>Login</h1>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				style={{ display: 'block', marginBottom: '1rem' }}
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				style={{ display: 'block', marginBottom: '1rem' }}
			/>
			<button onClick={handleLogin}>Log In</button>

			{error && <p style={{ color: 'red' }}>{error}</p>}
		</div>
	);
}
