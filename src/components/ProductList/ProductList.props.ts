import {DetailedHTMLProps, HTMLAttributes} from 'react';
import { ProductItem } from '@/interfaces/product.interface';

export interface ProductListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	products: ProductItem[];
}
