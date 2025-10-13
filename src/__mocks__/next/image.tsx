import * as React from 'react';

type ImgSrc = string | {src: string};

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
	src: ImgSrc;
	alt?: string;
}
const NextImageMock = ({src, alt = '', ...rest}: Props) => {
	const resolvedSrc = typeof src === 'string' ? src : src?.src ?? '';
	return <img src={resolvedSrc} alt={alt} {...rest} />;
}

export default NextImageMock;
