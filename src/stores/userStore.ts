import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '@/interfaces/user.interface';

type UserState = {
	user: User | null;               // user from backend
	accessToken: string | null;      // token from Supabase
	setAuthToken: (token: string | null) => void;
	setProfile: (u: User | null) => void;
	clearUser: () => void;
};

export const useUserStore = create<UserState>()(
	persist(
		(set) => ({
			user: null,
			accessToken: null,
			setAuthToken: (token) => set({ accessToken: token }),
			setProfile: (u) => set({ user: u }),
			clearUser: () => set({ user: null, accessToken: null }),
		}),
		{
			name: 'user-store',
			partialize: (s) => ({ user: s.user, accessToken: s.accessToken }),
		}
	)
);
