import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ImageZoomModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	src: string;
	alt: string;
	onClose: () => void;
}
