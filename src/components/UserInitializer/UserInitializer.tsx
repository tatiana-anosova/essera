'use client';
import { useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useUserStore } from '@/stores/userStore';
import { getUser } from '@/api/user';
import type { User } from '@/interfaces/user.interface';

export const UserInitializer = () => {
	const setAuthToken = useUserStore((s) => s.setAuthToken);
	const setProfile  = useUserStore((s) => s.setProfile);
	const clearUser   = useUserStore((s) => s.clearUser);

	useEffect(() => {
		const supabase = createClientComponentClient();

		const init = async () => {
			const { data: { session } } = await supabase.auth.getSession();

			if (session?.user) {
				setAuthToken(session.access_token ?? null);

				try {
					const me: User = await getUser(); // ← берём из api-слоя
					setProfile(me);
				} catch {
					setProfile(null);
				}
			} else {
				clearUser();
			}
		};

		init();

		const { data: { subscription } } = supabase.auth.onAuthStateChange(
			async (_event, session) => {
				if (session?.user) {
					setAuthToken(session.access_token ?? null);
					try {
						const me: User = await getUser();
						setProfile(me);
					} catch {
						setProfile(null);
					}
				} else {
					clearUser();
				}
			}
		);

		return () => subscription.unsubscribe();
	}, [setAuthToken, setProfile, clearUser]);

	return null;
}
