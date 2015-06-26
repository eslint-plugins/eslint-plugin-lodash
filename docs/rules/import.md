# Enforce that the entire lodash library is not imported

When building browser tools you want to keep the bundles as small as possible.
You can either take a dependency on the various `lodash.x` modules that exist,
or you can just have a dependency on the core library and only import what you
need. This rule will allow you to do so and ensure that the entire library is
not blindly imported.

## Rule Details

The following patterns are considered warnings:

```js
import _ from 'lodash';
```

```js
import { default as something } from 'lodash';
```

```js
import 'lodash';
```

The following patterns are not considered warnings:

```js
import find from 'lodash/collection/find';
```

## When Not To Use It

If you do not care that the entire lodash libary is imported.
