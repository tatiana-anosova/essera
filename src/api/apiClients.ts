const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

type ApiOptions = RequestInit & {
	accessToken?: string;
};

export async function apiClient<T>(path: string, options: ApiOptions = {}): Promise<T> {
	const { accessToken, headers, ...rest } = options;

	const res = await fetch(`${API_URL}${path}`, {
		credentials: rest.credentials ?? 'same-origin',
		...rest,
		headers: {
			...(rest.body ? { 'Content-Type': 'application/json' } : {}),
			...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
			...(headers || {}),
		},
	});

	if (!res.ok) {
		throw new Error(`API error: ${res.status} ${res.statusText}`);
	}
	return res.json();
}
