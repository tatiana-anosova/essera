import { ProductItem } from '@/interfaces/product.interface';
export async function fetchProducts(): Promise<ProductItem[]> {
	const res = await fetch('http://localhost:3001/products');
	if (!res.ok) throw new Error('Failed to fetch products');
	return res.json();
}

export async function fetchProductById(id: number): Promise<ProductItem> {
	const res = await fetch(`http://localhost:3001/products/${id}`);
	if (!res.ok) throw new Error('Failed to fetch products');
	return res.json();
}

export async function fetchProductBySlug(slug: string): Promise<ProductItem> {
	const res = await fetch(`http://localhost:3001/products/slug/${slug}`);
	if (!res.ok) throw new Error('Failed to fetch product');
	return res.json();
}
