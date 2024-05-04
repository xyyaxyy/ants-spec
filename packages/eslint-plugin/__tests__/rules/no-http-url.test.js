'use strict';

const rule = require('../../rules/no-http-url');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: "var test = 'https://antsxdp.com';",
    },
  ],

  invalid: [
    {
      code: "var test = 'http://antsxdp.com';",
      output: "var test = 'http://antsxdp.com';",
      errors: [
        {
          message: 'Recommended "http://antsxdp.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://antsxdp.com' />",
      output: "<img src='http://antsxdp.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Recommended "http://antsxdp.com" switch to HTTPS',
        },
      ],
    },
  ],
});
