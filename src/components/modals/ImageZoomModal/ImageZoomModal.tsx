'use client';
import { ImageZoomModalProps } from './ImageZoomModal.props';
import styles from './ImageZoomModal.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

export const ImageZoomModal = ({ src, alt, onClose }: ImageZoomModalProps) => {


	return (
		<div className={clsx(styles.container)}>
			<div
				className={clsx(styles.imageWrapper)}
			>
				<Image
					src={src}
					fill
					alt={alt}
					className={styles.image}
				/>
			</div>
		</div>
	);
};

