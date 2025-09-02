import type { User } from '@/interfaces/user.interface';
import { apiClientAuth } from '@/api/apiClient';

export async function getUser(): Promise<User> {
	return apiClientAuth<User>('/users/me');
}
