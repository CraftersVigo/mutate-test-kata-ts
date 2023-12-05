import { type JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  forceExit: true,
  logHeapUsage: true,
  setupFiles: ['dotenv/config'],
  transform: {
    '\\.ts$': [
      'ts-jest',
      {
        isolatedModules: true,
      },
    ]
  },
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['jest-extended/all', 'reflect-metadata'],
  testMatch: ['**/*.spec.ts', '**/*.test.ts'],
  testTimeout: 10000,
  collectCoverageFrom: [
    'src/mutant/*.ts',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ],
}

export default config
