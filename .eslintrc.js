module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'prettier', 'jsx-a11y', 'react-hooks'],
  ignorePatterns: ['**/dist/*.js', '**/node-modules/*'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        jsxBracketSameLine: false,
      },
    ],
    'no-param-reassign': ['error', { props: false }],
    'no-console': 1,
    'no-unused-vars': 1,
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
    'react/react-in-jsx-scope': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],
  },
};
