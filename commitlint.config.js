module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    (message) =>
      /\bWIP\b/i.test(message) ||
      /^(?:(:\w+:)\s)?\[\w+?.\-\w+\]+:\s.*/g.test(message)
  ],
  rules: {
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'enhance',
        'feat',
        'fix',
        'lint',
        'perf',
        'refactor',
        'rename',
        'remove',
        'revert',
        'style',
        'tooling',
        'test',
      ],
    ],
  },
};
