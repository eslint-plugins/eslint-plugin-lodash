import eslint from 'eslint';
import 'babel-eslint';
import rule from '../../src/rules/import-destructed';

const ruleTester = new eslint.RuleTester();

const message = 'Please use the destructuring assignment when using lodash functions';

ruleTester.run('lodash/import-destructed', rule, {
  valid: [
    {
      code: 'import {pluck, find} from "lodash"',
      parser: 'babel-eslint'
    },
    {
      code: 'import { pluck as plink } from "lodash"',
      parser: 'babel-eslint'
    },
    {
      code: 'import { pluck } from "lodash"',
      parser: 'babel-eslint'
    },
  ],
  invalid: [
    {
      code: 'import "lodash"',
      parser: 'babel-eslint',
      errors: [{
        message
      }]
    },
    {
      code: 'import _ from "lodash"',
      parser: 'babel-eslint',
      errors: [{
        message
      }]
    },
    {
      code: 'import lodash from "lodash"',
      parser: 'babel-eslint',
      errors: [{
        message
      }]
    }
  ]
});
