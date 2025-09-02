import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { User } from '@/interfaces/user.interface';
import { apiClient } from '@/api/apiClients';

export async function getUser(): Promise<User> {
	const supabase = createClientComponentClient();
	const { data: { session } } = await supabase.auth.getSession();
	const accessToken = session?.access_token;

	return apiClient<User>('/user', { accessToken });
}
