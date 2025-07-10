import { PhilosophyProps } from './Philosophy.props';
import styles from './Philosophy.module.css';
import clsx from 'clsx';

export const Philosophy = ({ children, className, ...props }: PhilosophyProps) => {

	return (
		<section className={clsx(styles.philosophy, className)} {...props}>
			<div className={clsx(styles.wrapper)}>
				<div className={clsx(styles.title)}>Essera Philosophy</div>
				{/*<div className={clsx(styles.text)}>*/}
				{/*	<p>At Essera, we believe in the quiet power of softness.</p>*/}
				{/*	<p>In lingerie that feels like a second skin. In choosing yourself, every morning.</p>*/}
				{/*	<p>You don’t need loud — just something that feels like you.</p>*/}
				{/*</div>*/}
				<div className={clsx(styles.text)}>
					<p>
						We believe in softness as strength — quiet, calm, and rooted in self-respect.
					</p>
					<p>
						Essera is lingerie made to feel like a part of you: gentle on the skin, honest in form, and never trying to be louder than you are.
					</p>
					<p>
						We design for women who move through life with presence — who choose comfort not as compromise, but as a quiet ritual of self-care.
					</p>
					<p>
						Here, beauty is effortless. Confidence is quiet. And every detail is made to support the way you truly feel.
					</p>
				</div>
			</div>

		</section>
	);
};
