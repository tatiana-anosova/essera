import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './e2e',
	timeout: 30_000,
	expect: { timeout: 5_000 },
	use: {
		baseURL: 'http://localhost:3000',
		trace: 'on-first-retry',
		video: 'retain-on-failure',
		screenshot: 'only-on-failure',
	},
	projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
	webServer: {
		command: 'npm run build && next start -p 3000',
		url: 'http://localhost:3000',
		reuseExistingServer: true,
		timeout: 120_000,
	},
	reporter: [['list'], ['html', { open: 'never' }]],
});
