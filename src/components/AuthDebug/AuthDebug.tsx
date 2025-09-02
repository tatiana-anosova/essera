'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useUserStore } from '@/stores/userStore';

export const AuthDebug = () => {
	const store = useUserStore();
	const [sessionEmail, setSessionEmail] = useState<string | null>(null);

	useEffect(() => {
		const supabase = createClientComponentClient();
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSessionEmail(session?.user?.email ?? null);
			console.log('[AuthDebug] getSession:', session);
		});
	}, []);

	return (
		<pre style={{ position: 'fixed', bottom: 8, right: 8, zIndex: 9999, padding: 8, background: '#000', color: '#0f0', maxWidth: 480 }}>
      store.user: {JSON.stringify(store.user, null, 2)}{'\n'}
			store.accessToken: {store.accessToken ? 'present' : 'null'}{'\n'}
			supabase.session.user.email: {sessionEmail ?? 'null'}
    </pre>
	);
}
