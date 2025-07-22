import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonColor = 'primary' | 'neutral' | 'transparent';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	size?: ButtonSize;
	color?: ButtonColor;
	className?: string;
}
