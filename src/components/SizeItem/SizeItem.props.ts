import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { SizeOption } from '@/interfaces/size.interface';

export interface SizeItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	sizeOption: SizeOption;
	selected?: boolean;
	onSizeSelect?: (value: string) => void;
}
