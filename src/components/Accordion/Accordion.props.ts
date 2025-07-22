import {DetailedHTMLProps, HTMLAttributes} from 'react';
import { AccordionItem } from '@/interfaces/accordion.interface';

export interface AccordionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	items: AccordionItem[];
	className?: string;
}
