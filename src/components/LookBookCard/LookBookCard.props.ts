import {DetailedHTMLProps, HTMLAttributes} from 'react';


export interface LookBookCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	img?: string,
	alt?: string,
	title?: string,
}
