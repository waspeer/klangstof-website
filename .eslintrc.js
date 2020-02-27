module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js', 'plugin:cypress/recommended'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.tsx', 'test/**/*'] },
    ],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    '@typescript-eslint/no-explicit-any': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
