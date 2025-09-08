// UI-friendly snapshot of a product that goes into the cart.
// No internal fields like variants; only what the cart UI needs.
export interface CartProduct {
	id: number;
	images: string[];      // thumbnails to render in cart (usually from the chosen variant)
	slug: string;
	title: string;
	price: number;         // unit price at add-to-cart time (discountPrice ?? basePrice)
	label?: 'new' | 'best' | 'sell' | '';
	inStock?: boolean;
	category?: string;
	brand?: string;
	sku?: string;
	createdAt?: string;
	updatedAt?: string;
}

// One line in the cart UI.
export interface CartEntry {
	product: CartProduct;
	size: string;          // chosen size (UI value, e.g. "L" or "34B")
	color: string;         // chosen color (UI value, e.g. "black")
	quantity: number;      // chosen quantity
}
