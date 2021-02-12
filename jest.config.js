// jest.config.js
const path = require('path');
const createJestConfig = require('serverless-bundle/scripts/config/createJestConfig');
const relativePath = (relativePath) => path.resolve(__dirname, 'node_modules/serverless-bundle', relativePath);
console.log( { relativePath });
module.exports = {
  ...createJestConfig(relativePath, __dirname),
  collectCoverageFrom: [
    'src/*.ts',
    '!**/node_modules/**',
  ]
}