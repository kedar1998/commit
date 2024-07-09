module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'solo',
        'feat',     // A new feature LOL
        'fix',      // A bug fix
        'docs',     // Documentation only changes
        'style',    // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
        'refactor', // A code change that neither fixes a bug nor adds a feature
        'perf',     // A code change that improves performance
        'test',     // Adding missing or correcting existing tests
        'chore',    // Changes to the build process or auxiliary tools and libraries such as documentation generation
        'build',    // Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
        'ci',       // Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
        'revert',   // Reverts a previous commit
        'wip'       // Work in progress
      ]
    ],
    'scope-enum': [
      2,
      'always',
      [
        'api',      // Changes related to the API
        'auth',     // Changes related to authentication
        'db',       // Changes related to the database
        'docs',     // Changes related to documentation
        'ui',       // Changes related to the user interface
        'config'    // Changes related to configuration files
      ]
    ],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72]
  }
};