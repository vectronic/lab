## ES6 Module Isomorphic Packaging Dynamic Plugin Framework

All source and build output is in ES2015 module form. 

There is no intention to:
 
* Output non-ES2015 modules
* Support browsers or NodeJS versions which don't support:
    * https://github.com/tc39/proposal-dynamic-import
    * https://tc39.github.io/ecmascript-asyncawait/
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Because of this the modules are configured so that:
 
* no transpiling is performed
* `package.json` specifies `"main": "build/lib.mjs"` (as per: https://nodejs.org/api/esm.html#esm_enabling and
https://github.com/nodejs/node-eps/blob/master/002-es-modules.md#44-shipping-both-esm-and-cjs)
* `package.json` specifies `"module": "build/lib.mjs"` (as per: https://github.com/rollup/rollup/wiki/pkg.module)
* ESLint is configured to use the `babel-eslint` parser.

---
 
Legacy CommonJS format npm packages are supported for internal consumption by `rollup-plugin-commonjs`

---

Library modules are generated without the `debug` dependency being included. This is achieved by:
 
* Specifying `debug` as a peer dependency in `package.json`
* Using the `rollup-plugin-peer-deps-external` plugin for Rollup.

This allows consuming applications to determine the best form of the dependency (e.g. NodeJS or browser version) 
and ensures it will only be added once to the final application module.

---

For the consuming browser application the library modules are consumed by providing replacements for NodeJS packages
such as `tty` and `util` via the following Rollup plugins:

* `rollup-plugin-node-builtins`
* `rollup-plugin-node-globals`

---

For the consuming node application the library modules are consumed by declaring NodeJS packages
such as `tty` and `util` as available via the following Rollup config:

```
    external: [
        'tty',
        'util',
        'os'
    ]
```
