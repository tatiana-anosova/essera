'use client';
import { useState } from 'react';
import { AccordionProps } from './Accordion.props';
import styles from './Accordion.module.css';
import clsx from 'clsx';

export const Accordion = ({ items, children, className, ...props }: AccordionProps) => {
	const [openId, setOpenId] = useState<string | null>(null);

	const handleToggle = (id: string) => {
		setOpenId(prev => (prev === id ? null : id));
	};

	return (
		<div className={clsx(styles.accordion, className)} {...props}>
			{items.map(item => (
				<div key={item.id} className={clsx(styles.item)}>
					<button
						className={clsx(styles.header)}
						onClick={() => handleToggle(item.id)}
						aria-expanded={openId === item.id}
						aria-controls={`accordion-content-${item.id}`}
					>
						<span>{item.title}</span>
						<span className={clsx(styles.icon)}>
              {openId === item.id ? '−' : '+'}
            </span>
					</button>
					{openId === item.id && (
						<div
							id={`accordion-content-${item.id}`}
							className={clsx(styles.content)}
						>
							{item.content}
						</div>
					)}
				</div>
			))}
		</div>
	);
};
