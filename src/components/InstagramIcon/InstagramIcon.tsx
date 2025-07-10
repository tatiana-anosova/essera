import { InstagramIconProps } from './InstagramIcon.props';

export const InstagramIcon = ({ children, className, ...props }: InstagramIconProps) => (
	// @ts-ignore
	<svg
		width={24}
		height={24}
		fill="none"
		stroke="currentColor"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		{...props}
	>
		<rect x={2} y={2} width={20} height={20} rx={5}/>
		<circle cx={12} cy={12} r={5}/>
		<circle cx={17} cy={7} r={1}/>
	</svg>
);
