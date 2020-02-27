/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  setupFilesAfterEnv: [path.resolve(__dirname, './test/jest/setup.js')],
  transform: {
    '^.+\\.(tsx?|jsx?)$': '<rootDir>/test/jest/preprocess.js',
  },
  moduleNameMapper: {
    // '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    //   '<rootDir>/test/jest/mocks/file-mocks.js',
    '^#components/(.*)$': '<rootDir>/src/components/$1',
    '^#lib/(.*)$': '<rootDir>/src/lib/$1',
    '^#test/(.*)$': '<rootDir>/test/$1',
  },
  testPathIgnorePatterns: ['node_modules', '.cache', 'public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testRegex: '(/test/jest/|/src/).*\\.(test|spec)\\.(ts|tsx|js|jsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
};
