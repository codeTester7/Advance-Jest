/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    reporters : ['default', 
      ['jest-html-reporters',
        {
        publicPath : "reports",
        pageTitle : "Custom Jest HTML Report",
        includePassed : true,
        openReport : true,
        expand : true,
        includeCustomData : true,
        includeFailureMsg : true,
        includeConsoleLog : true,
        includeInfoButton : true
        }
      ]
    ]
  };