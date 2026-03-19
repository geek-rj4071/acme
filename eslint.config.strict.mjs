import baseConfig from './eslint.config.mjs';

export default [
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
    rules: {
      'max-lines-per-function': [
        'error',
        { max: 20, skipBlankLines: false, skipComments: false },
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: ['lodash', 'lodash/*', 'lodash-es', 'lodash-es/*'],
        },
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector:
            "CallExpression[callee.type='Identifier'][callee.name='setTimeout']",
          message: 'Do not use setTimeout. Use RxJS timer/zone alternatives.',
        },
        {
          selector:
            "CallExpression[callee.type='Identifier'][callee.name='setInterval']",
          message: 'Do not use setInterval. Use RxJS interval instead.',
        },
        {
          selector: 'IfStatement IfStatement',
          message:
            'Nested if blocks are not allowed. Refactor with guard clauses.',
        },
      ],
      'no-inline-comments': 'error',
    },
  },
];
