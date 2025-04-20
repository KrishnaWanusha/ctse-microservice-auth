import type { Config } from 'jest'

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config: Config = {
  testTimeout: 45000,
  preset: 'ts-jest',
  modulePaths: ['<rootDir>'],
  modulePathIgnorePatterns: ['__mocks__']
}

export default config
