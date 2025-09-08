import { ReactNode } from 'react';

export interface AccordionItem {
	id: string | number;
	title: string;
	content: ReactNode;
}
