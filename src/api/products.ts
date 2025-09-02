import { ProductItem, Details } from '@/interfaces/product.interface';
import { apiClient } from '@/api/apiClient';

export async function fetchProducts(): Promise<ProductItem[]> {
	return apiClient<ProductItem[]>('/products');
}
export async function fetchProductById(id: number): Promise<ProductItem> {
	return apiClient<ProductItem>(`/products/${id}`);
}
export async function fetchProductBySlug(slug: string): Promise<ProductItem> {
	return apiClient<ProductItem>(`/products/slug/${slug}`);

}
export async function fetchDetailsBySlug(slug: string): Promise<Details[]> {
	return apiClient<Details[]>(`/products/slug/${slug}/details`);
}


// export async function fetchProducts(): Promise<ProductItem[]> {
// 	const res = await fetch(`${API_URL}/products`);
// 	if (!res.ok) throw new Error('Failed to fetch products');
// 	return res.json();
// }
//
// export async function fetchProductById(id: number): Promise<ProductItem> {
// 	const res = await fetch(`${API_URL}/products/${id}`);
// 	if (!res.ok) throw new Error('Failed to fetch products');
// 	return res.json();
// }
//
// export async function fetchProductBySlug(slug: string): Promise<ProductItem> {
// 	const res = await fetch(`${API_URL}/products/slug/${slug}`);
// 	if (!res.ok) throw new Error('Failed to fetch product');
// 	return res.json();
// }
//
// export async function fetchDetailsBySlug(slug: string): Promise<Details[]> {
// 	const res = await fetch(`${API_URL}/products/slug/${slug}/details`);
// 	if (!res.ok) throw new Error('Failed to fetch product');
// 	return res.json();
// }
