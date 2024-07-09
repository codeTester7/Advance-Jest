/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    'default',
    ['jest-html-reporters',
      {
        publicPath: 'reports',
        pageTitle: "Custom Jest HTML Reporter",
        openReport: true,
        expand: true,
        includePassed: true,
        //stripSkippedTest: true, //"It will skip pending tests"
        includeFailureMsg: true, // Example custom option
        includeConsoleLog: true, // Example custom option
        includeCustomData: true, // Example custom option
        includeInfoButton: true  // Hypothetical option to enable info button universally
      }
    ]
  ]
};