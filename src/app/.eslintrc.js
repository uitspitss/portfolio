module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    // 'jest/globals': true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './src/app/tsconfig.json',
    sourceType: 'module',
  },
  root: true,
  rules: {
    // eslint official
    'newline-before-return': 'error',
    'no-console': 'warn',
    'require-yield': 'error',

    // @typescript-eslint
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    // react
    'react/prop-types': 'off',

    // conflicts rules
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    // misc
    'no-useless-catch': 'off',
  },
};
