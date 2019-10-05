const { path } = require('./config')

module.exports = {
  setupFiles: [
    'dotenv/config'
  ],
  testPathIgnorePatterns: [
    '/.git/',
    '<rootDir>/build/',
    '<rootDir>/temp/',
    '/node_modules/'
  ],
  moduleFileExtensions: [
    'mjs',
    'ts',
    'tsx',
    'js',
    'jsx',
    'json'
  ],
  testMatch: [
    '**/?(*.)+(spec|test).?(m)[jt]s?(x)'
  ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    `${path.src.root}/**/*.?(m)[jt]s?(x)`
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}