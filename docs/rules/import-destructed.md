# Enforce using destructuring when using lodash functions

This rule enforces a cleaner codebase when using lodash's utility functions.

## Rule Details

The following patterns are considered warnings:

```js
import _ from 'lodash';
```

```js
import 'lodash';
```

The following patterns are considered valid:

```js
import {find} from 'lodash';
```
