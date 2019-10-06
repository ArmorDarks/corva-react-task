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
    `${path.src.root}/**/*.?(m)[jt]s?(x)`,
    `!${path.src.root}/**/*.stories.?(m)[jt]s?(x)`,
    // @todo That's not what you would normally do, but server is out of scope
    //       of this test task
    `!${path.src.root}/server/**/*`
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
