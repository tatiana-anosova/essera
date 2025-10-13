import * as React from 'react';

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
	href: string | { pathname: string };
};

const Link = ({ href, children, ...rest }: Props) => {
	const resolvedHref = typeof href === 'string' ? href : href.pathname ?? '#';
	return <a href={resolvedHref} {...rest}> {children} </a>;
};

export default Link;
