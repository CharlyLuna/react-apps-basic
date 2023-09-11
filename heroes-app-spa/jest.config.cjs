module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js'
  },
  transformIgnorePatterns: ['/node_modules/(?!query-string)/']
}
