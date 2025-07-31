import styles from './page.module.css';
import clsx from 'clsx';

export default function TermsOfService() {
	return (
		<div className={clsx('page', styles.page)}>
			<main className={clsx(styles.main)}>
				<h1>Terms of Service</h1>

				<p className={clsx(styles.updated)}>Effective Date: <span>[July 10th, 2025]</span></p>

				<p>Welcome to Essera! These Terms of Service ("Terms") govern your use of our website located
					at <strong>www.essera.co</strong> (the "Site") and the purchase of products from us. By accessing or
					using our Site, you agree to be bound by these Terms.</p>

				<div className={clsx(styles.subtitle)}>1. Use of the Website</div>
				<p>You must be at least 18 years old or have permission from a parent or legal guardian to use this
					site. You agree not to use our website for any unlawful or unauthorized purpose.</p>

				<div className={clsx(styles.subtitle)}>2. Orders & Payments</div>
				<p>When you place an order through our Site, you agree to provide accurate and complete information. All
					payments are processed securely through third-party providers such as Shopify Payments, Stripe, or
					PayPal. We reserve the right to refuse or cancel any order at our sole discretion.</p>

				<div className={clsx(styles.subtitle)}>3. Product Information</div>
				<p>We make every effort to display product colors and descriptions accurately. However, we cannot
					guarantee that your device’s screen will display them correctly. All products are subject to
					availability and we reserve the right to discontinue items at any time.</p>

				<div className={clsx(styles.subtitle)}>4. Pricing</div>
				<p>All prices are listed in USD. Prices are subject to change without notice. Applicable sales tax and
					shipping costs will be added at checkout.</p>

				<div className={clsx(styles.subtitle)}>5. Shipping & Delivery</div>
				<p>We ship orders within the United States. Processing times and delivery estimates are provided at
					checkout. Essera is not responsible for delays caused by the shipping carrier or incorrect address
					details provided by the customer.</p>

				<div className={clsx(styles.subtitle)}>6. Returns & Exchanges</div>
				<p>For hygiene reasons, we are unable to accept returns or exchanges on underwear unless the item is
					defective. Please refer to our <a href="/return-policy">Return Policy</a> for details.</p>

				<div className={clsx(styles.subtitle)}>7. Intellectual Property</div>
				<p>All content on the Site — including logos, images, text, and designs — is the property of Essera and
					may not be copied, reproduced, or distributed without written permission.</p>

				<div className={clsx(styles.subtitle)}>8. Limitation of Liability</div>
				<p>Essera is not liable for any direct, indirect, incidental, or consequential damages resulting from
					your use of our website or purchase of our products.</p>

				<div className={clsx(styles.subtitle)}>9. Indemnification</div>
				<p>You agree to indemnify, defend, and hold harmless Essera and its team from any claims, damages, or
					legal fees arising from your violation of these Terms or misuse of the Site.</p>

				<div className={clsx(styles.subtitle)}>10. Governing Law</div>
				<p>These Terms shall be governed by and construed in accordance with the laws of the State of [Your
					State], without regard to its conflict of law principles.</p>

				<div className={clsx(styles.subtitle)}>11. Changes to Terms</div>
				<p>We may update these Terms at any time. The updated version will be posted on this page with the
					revised effective date. Your continued use of the Site means you accept those changes.</p>

				<div className={clsx(styles.subtitle)}>12. Contact Us</div>
				<p>If you have any questions about these Terms, please contact us at:</p>
				<p>
					<strong>Email:</strong> <a href="mailto:support@essera.store">support@essera.store</a><br/>
					<strong>Website:</strong> <a href="https://essera.store">essera.store</a>
				</p>
			</main>
		</div>
	);
}
