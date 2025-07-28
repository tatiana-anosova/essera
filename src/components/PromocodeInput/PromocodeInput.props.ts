import {DetailedHTMLProps, FormHTMLAttributes} from 'react';

export interface PromocodeInputProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
	onApply: (code: string) => void;
	isLoading?: boolean;
	error?: string;
}
