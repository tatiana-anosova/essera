import styles from './page.module.css';
import clsx from 'clsx';

export default function PrivacyPolicy() {
	return (
		<div className={clsx('page', styles.page)}>
			<main className={clsx(styles.main)}>
				<h1>Privacy Policy</h1>

				<p className={clsx(styles.updated)}>Effective Date: <span>[July 10th, 2025]</span></p>

				<p>Essera (“we”, “our”, or “us”) respects your privacy and is committed to protecting your personal
					information. This Privacy Policy explains how we collect, use, and share your information when you
					visit our website <strong>essera.store</strong>, make a purchase, or otherwise interact with us.
				</p>

				<div className={clsx(styles.subtitle)}>1. Information We Collect</div>

				<p>We may collect the following types of information:</p>
				<ul>
					<li><strong>Personal Information:</strong> Name, email address, shipping and billing address, phone
						number, payment details.
					</li>
					<li><strong>Order Information:</strong> Details of your purchases and order history.</li>
					<li><strong>Device Information:</strong> IP address, browser type, cookies, and browsing behavior on
						our site.
					</li>
				</ul>

				<div className={clsx(styles.subtitle)}>2. How We Use Your Information</div>
				<p>We use your information to:</p>
				<ul>
					<li>Process and fulfill orders</li>
					<li>Provide customer support</li>
					<li>Send order updates and promotional emails (if subscribed)</li>
					<li>Improve our website and services</li>
					<li>Comply with legal obligations</li>
				</ul>

				<div className={clsx(styles.subtitle)}>3. Sharing Your Information</div>
				<p>We may share your information with trusted third parties, including:</p>
				<ul>
					<li>Payment processors (e.g., Shopify Payments, Stripe, PayPal)</li>
					<li>Shipping providers (e.g., USPS, FedEx)</li>
					<li>Email marketing platforms (if you subscribe to our newsletter)</li>
					<li>Legal authorities when required by law</li>
				</ul>

				<div className={clsx(styles.subtitle)}>4. Cookies</div>
				<p>We use cookies to enhance your browsing experience. Cookies help us understand how visitors interact
					with our website. You can disable cookies through your browser settings.</p>

				<div className={clsx(styles.subtitle)}>5. Your Rights</div>
				<p>If you are a resident of California or the European Union, you may have certain rights regarding your
					personal data, including:</p>
				<ul>
					<li>The right to access, update, or delete your information</li>
					<li>The right to object to certain processing</li>
					<li>The right to withdraw consent</li>
				</ul>
				<p>To exercise your rights, please contact us at <a
					href="mailto:support@essera.store">support@essera.store</a>.</p>

				<div className={clsx(styles.subtitle)}>6. Data Retention</div>
				<p>We retain your personal data only as long as necessary to fulfill the purposes described in this
					policy, unless a longer retention period is required by law.</p>

				<div className={clsx(styles.subtitle)}>7. Third-Party Links</div>
				<p>Our website may contain links to third-party websites. We are not responsible for their content or
					privacy practices. We encourage you to read their privacy policies.</p>

				<div className={clsx(styles.subtitle)}>8. Changes to This Policy</div>
				<p>We may update this Privacy Policy from time to time. We will notify you of significant changes by
					updating the effective date at the top of this page.</p>

				<div className={clsx(styles.subtitle)}>9. Contact Us</div>
				<p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
				<p>
					<strong>Email:</strong> <a href="mailto:support@essera.store">support@essera.store</a><br/>
					<strong>Website:</strong> <a href="https://essera.store">essera.store</a>
				</p>
			</main>
		</div>
	);
}
