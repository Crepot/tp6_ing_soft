module.exports = {
  extends: ['standard', 'plugin:prettier/recommended', 'plugin:jsdoc/recommended'],
  root: true,
  parser: 'babel-eslint',
  plugins: ['import', 'prettier', 'jsdoc'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '/'],
      },
    },
  },
  rules: {
    semi: [2, 'always'],
    'import/no-named-as-default': 0,
    'no-return-await': 2,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        semi: true,
        bracketSpacing: true,
        // jsxBracketSameLine: true,
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
      },
    ],
    'no-console': 0,
    'jsdoc/newline-after-description': 0,
    'array-callback-return': 0,
  },
  overrides: [
    {
      env: {
        browser: true,
      },
      globals: {
        self: true,
        firebase: true,
        importScripts: true,
      },
      rules: {
        'no-restricted-globals': 0,
        'no-console': 0,
      },
    },
  ],
};
