## Sample Library

Output is a ES2015 module. Currently there is no intention to output non-ES2015 modules, nor support browsers or 
NodeJS versions which don't support features such as:

* https://github.com/tc39/proposal-dynamic-import
* https://tc39.github.io/ecmascript-asyncawait/
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Therefore:
 
* no transpiling is performed
* `package.json` specifies `"main": "build/lib.mjs"` as per: https://nodejs.org/api/esm.html#esm_enabling and
https://github.com/nodejs/node-eps/blob/master/002-es-modules.md#44-shipping-both-esm-and-cjs
* `package.json` specifies `"module": "build/lib.mjs"` as per: https://github.com/rollup/rollup/wiki/pkg.module
* it is necessary to ensure that:
    * Rollup is executed with the `--experimentalDynamicImport` argument.
    * ESLint is configured to use the `babel-eslint` parser.

---
 
Legacy CommonJS format npm packages are supported for internal consumption by the following Rollup plugins:

* `rollup-plugin-node-resolve`
* `rollup-plugin-commonjs`

---

The module is generated without the `debug` dependency being included. This is specified in `rollup.config.js` via:

```external: ['debug'],```

This allows consuming applications to determine the best form of the dependency (e.g. NodeJS or browser version) 
and ensures it will only be added once to the final application module.

### Install
`npm install`

### Watch Source
`npm run dev`

### Expose for Consumption in Sibling Projects
`sudo npm link` 
