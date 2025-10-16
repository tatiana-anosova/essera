import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
	test('renders Hero, Phylosophy and LookBook section', async({ page }) => {
		await page.goto('/');

		// HERO
		const hero = page.getByTestId('hero');
		await expect(hero).toBeVisible();
		await expect(hero.getByRole('heading', { name: /confidence in every thread/i, level: 1 })).toBeVisible();
		await expect(hero.getByText(/minimal lingerie for women/i)).toBeVisible();

		// PHILOSOPHY
		const philosophy = page.getByTestId('philosophy');
		await expect(philosophy).toBeVisible();
		await expect(philosophy.getByText(/essera philosophy/i)).toBeVisible();
		await expect(philosophy.getByText(/we believe in softness as strength/i, {exact: false})).toBeVisible();

		// LOOKBOOK
		const lookbook = page.getByTestId('lookbook');
		await expect(lookbook).toBeVisible();
		await expect(lookbook.getByRole('heading', { name: 'Essera LookBook', level: 2 })).toBeVisible();

		const cards = page.getByTestId('lookbook-card');
		await expect(cards).toHaveCount(3);

		for (const card of await cards.all()) {
			await expect(card).toBeVisible();
		}

		const expectedTitles = [
			'Where softness meets quiet confidence',
			'For the mornings you choose yourself',
			'Effortless calm in every detail',
		];

		for (let i = 0; i < expectedTitles.length; i++) {
			const title = await cards.nth(i).locator('p').textContent();
			expect(title).toContain(expectedTitles[i]);
		}

		for (const card of await cards.all()) {
			const img = card.locator('img');
			const title = card.locator('p');
			await expect(img).toBeVisible();
			await expect(title).not.toBeEmpty();
		}

	})
})
