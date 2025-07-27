import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface CartModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	onClose: () => void;
}
