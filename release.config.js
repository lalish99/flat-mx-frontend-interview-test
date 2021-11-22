module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'docs', scope: 'README', release: 'patch' },
          { type: 'update', release: 'patch' }
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
        }
      }
    ],
    '@semantic-release/github',
    [
      '@semantic-release/npm',
      {
        npmPublish: false
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            {
              type: 'feat',
              section: ':sparkles: New Features',
              hidden: false
            },
            {
              type: 'fix',
              section: ':bug: Bug Fixes',
              hidden: false
            },
            {
              type: 'docs',
              section: ':memo: Documentation',
              hidden: false
            },
            {
              type: 'style',
              section: ':barber: Styles',
              hidden: false
            },
            {
              type: 'refactor',
              section: ':zap: Code Refactor',
              hidden: false
            },
            {
              type: 'perf',
              section: ':fast_forward: Performance',
              hidden: false
            },
            {
              type: 'test',
              section: ':white_check_mark: Tests',
              hidden: false
            },
            {
              type: 'ci',
              section: ':repeat: CI',
              hidden: false
            },
            {
              type: 'update',
              section: ':books: Updates'
            },
            {
              type: 'chore',
              hidden: true
            }
          ]
        }
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json'],
        repositoryUrl: 'https://github.com/Leadsales/leadsales',
        githubUrl: 'https://github.com',
        githubApiPathPrefix: '/api/v3/',
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ]
  ],
  branches: [
    { name: 'main', prerelease: false },
    { name: 'staging', prerelease: true },
    { name: 'dev', prerelease: true }
  ]
}
