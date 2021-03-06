const path = require('path')

module.exports = {
  // Your normal jest config settings
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
  coverageReporters: ['text', 'text-summary', 'json-summary', 'lcov'],
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 40,
      statements: 40,
    },
  },
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
  modulePaths: ['<rootDir>', '<rootDir>/src', '<rootDir>/src/utils'],
  rootDir: '.',
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'utils'],
}
