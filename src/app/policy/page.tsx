import styles from './page.module.css';
import clsx from 'clsx';

export default function Policy() {
	return (
		<div className={clsx('page', styles.page)}>
			<main className={styles.main}>
				<h1>Privacy Policy</h1>
				<div className={clsx(styles.updated)}>
					Last updated: <span>[July 10th, 2025]</span>
				</div>
				<p>
					At <strong>Essera</strong>, we value your trust — and that includes protecting your privacy. This
					Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit
					our website <strong>essera.store</strong>,
					place an order, or interact with us online.
				</p>
				<div className={clsx(styles.subtitle)}>1. What We Collect</div>
				<p>
					We may collect the following types of personal data when you use our site:
				</p>
				<ul>
					<li>Name, email address, and shipping/billing address</li>
					<li>Payment information (processed securely via third-party services)</li>
					<li>Purchase history</li>
					<li>Device and browser data (via cookies and analytics tools)</li>
					<li>Any information you voluntarily provide (e.g., in contact forms or email subscriptions)</li>
				</ul>
				<div className={clsx(styles.subtitle)}>2. How We Use Your Information</div>
				<p>
					We use your data to:
				</p>
				<ul>
					<li>Process and fulfill your orders</li>
					<li>Communicate with you about your purchases</li>
					<li>Send updates or promotional emails (only with your consent)</li>
					<li>Improve our website experience</li>
					<li>Comply with legal obligations</li>
				</ul>
				<div className={clsx(styles.subtitle)}>3. Sharing Your Information</div>
				<p>We never sell your personal data.</p>
				<p>We may share it with trusted third-party services that help us operate our business, such as:</p>
				<ul>
					<li>Payment processors (e.g., Stripe, PayPal)</li>
					<li>Email services (e.g., Mailchimp, Klaviyo)</li>
					<li>Analytics providers (e.g., Google Analytics)</li>
				</ul>
				<p>All partners are required to protect your data according to privacy standards.</p>
				<div className={clsx(styles.subtitle)}>4. Cookies</div>
				<p>We use cookies to enhance your experience and understand how our site is used. You can manage your
					cookie preferences through your browser settings.</p>
				<div className={clsx(styles.subtitle)}>5. Your Rights</div>
				<p>Depending on your location, you may have the right to:</p>
				<ul>
					<li>Access the personal data we hold about you</li>
					<li>Request correction or deletion</li>
					<li>Withdraw consent for marketing communications</li>
					<li>Request data portability</li>
				</ul>
				<p>
					To make a request, please email us at&nbsp;
					<a href="mailto:privacy@essera.store">privacy@essera.store</a>
				</p>
				<div className={clsx(styles.subtitle)}>6. Data Security</div>
				<p>We take reasonable technical and organizational steps to protect your data from unauthorized access,
					loss, or misuse.</p>
				<div className={clsx(styles.subtitle)}>7. Changes to This Policy</div>
				<p>We may update this Privacy Policy from time to time. Changes will be posted on this page with the
					updated date above.</p>
				<div className={clsx(styles.subtitle)}>8. Contact Us</div>
				<p>If you have any questions about this Privacy Policy or how your data is handled, feel free to contact
					us at:</p>
				<p><a href="mailto:privacy@essera.store">privacy@essera.store</a></p>
				<p>Essera</p>
				<p>Austin, TX</p>
			</main>
		</div>
	);
}
