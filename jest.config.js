const { path } = require('./config')

module.exports = {
  preset: 'ts-jest',
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
  moduleNameMapper: {
    '^.+\\.s[ac]ss$': 'babel-jest'
  },
  testMatch: [
    '**/?(*.)+(spec|test).?(m)[jt]s?(x)'
  ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    `${path.src.root}/**/*.?(m)[jt]s?(x)`
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  setupFilesAfterEnv: [
    `<rootDir>/${path.src.root}/app/setupEnzyme.ts`
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
