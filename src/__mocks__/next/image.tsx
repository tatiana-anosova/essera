import * as React from 'react';

type ImgSrc = string | {src: string};

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
	src: ImgSrc;
	alt?: string;
	fill?: boolean;
}
const NextImageMock = ({ src, alt = '', fill, style, ...rest }: Props) => {
	const resolved = typeof src === 'string' ? src : src?.src ?? '';

	const mergedStyle = fill
		? { ...style, width: '100%', height: '100%', objectFit: (rest as any).objectFit ?? undefined }
		: style;

	return <img src={resolved} alt={alt} style={mergedStyle} {...rest} />;
};

export default NextImageMock;
