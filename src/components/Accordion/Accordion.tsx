'use client';
import { useState } from 'react';
import { AccordionProps } from './Accordion.props';
import styles from './Accordion.module.css';
import clsx from 'clsx';

export const Accordion = ({ items, children, className, ...props }: AccordionProps) => {
	const [openId, setOpenId] = useState<string | null>(null);

	const handleToggle = (id: string | number) => {
		const idStr = String(id);
		setOpenId(prev => (prev === idStr ? null : idStr));
	};

	return (
		<div className={clsx(styles.accordion, className)} {...props}>
			{items.map(item => {
				const idStr = String(item.id);
				return (
					<div key={idStr} className={clsx(styles.item)}>
						<button
							className={clsx(styles.header)}
							onClick={() => handleToggle(item.id)}
							aria-expanded={openId === idStr}
							aria-controls={`accordion-content-${idStr}`}
						>
							<span>{item.title}</span>
							<span className={clsx(styles.icon)}>{openId === idStr ? '−' : '+'}</span>
						</button>
						{openId === idStr && (
							<div id={`accordion-content-${idStr}`} className={clsx(styles.content)}>
								{item.content}
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};
