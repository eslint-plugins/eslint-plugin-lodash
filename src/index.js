import importRule from './rules/import';
import importDestructedRule from './rules/import-destructed';

export default {
  rules: {
    'import': importRule,
    'import-destructed': importDestructedRule
  },
  rulesConfig: {
    'import': 1,
    'import-destructed': 1
  }
};
