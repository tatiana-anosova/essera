import nextJest from 'next/jest';

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
	},
	testPathIgnorePatterns: ['/node_modules/', '/.next/', '/playwright-report/'],
};

export default createJestConfig(customJestConfig);
