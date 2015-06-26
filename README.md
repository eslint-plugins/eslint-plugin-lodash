ESLint-plugin-lodash
===================

lodash specific linting rules for ESLint

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

    npm install eslint

If you installed `ESLint` globally, you have to install lodash plugin globally too. Otherwise, install it locally.

    $ npm install eslint-plugin-lodash

The rules are specifically written to target ES6 JavaScript, so you'll want to
use the [babel-eslint](https://github.com/babel/babel-eslint) parser.

# Configuration

Add `plugins` section and specify ESLint-plugin-lodash as a plugin.

```json
{
  "parser": "babel-eslint",
  "plugins": [
    "lodash"
  ]
}
```

Finally, enable all of the rules that you would like to use.

```json
{
  "rules": {
    "lodash/import": 1,
  }
}
```

# List of supported rules

* [import](docs/rules/import.md): Prevent importing the entire lodash library.

## To Do

* Add Contributing Guide, until then PRs welcome!

[Any rule idea is welcome !](https://github.com/eslint-plugins/eslint-plugin-lodash/issues)

# License

ESLint-plugin-lodash is licensed under the [MIT License](LICENSE).
