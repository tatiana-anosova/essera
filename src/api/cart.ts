import { apiClientAuth } from '@/api/apiClient';
import type { ServerCartDTO, ServerCartItemDTO } from '@/interfaces/cart.interface';

export function fetchServerCart(signal?: AbortSignal) {
	return apiClientAuth<ServerCartDTO>('/cart', { signal });
}

export function replaceServerCart(items: ServerCartItemDTO[], signal?: AbortSignal) {
	return apiClientAuth<ServerCartDTO>('/cart', {
		method: 'PUT',
		body: JSON.stringify({ items }),
		signal,
	});
}
