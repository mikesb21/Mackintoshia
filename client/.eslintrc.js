module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    $: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': 'warn',
    'arrow-parens': 'off',
    'linebreak-style': ['error', 'unix'],
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
    {
      files: ['**/*.vue'],
      rules: {
        'max-len': ['error', { code: 160 }],
      },
    },
    {
      files: ['tc/**/*.js'],
      globals: {
        test: true,
        fixture: true,
      },
      rules: {
        'newline-per-chained-call': 'off',
      },
    },
  ],
};
