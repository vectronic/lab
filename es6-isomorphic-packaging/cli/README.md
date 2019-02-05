## Sample Node Runtime

Output is a ES2015 module. Currently there is no intention to output non-ES2015 modules, nor support browsers or 
NodeJS versions which don't support features such as:

* https://github.com/tc39/proposal-dynamic-import
* https://tc39.github.io/ecmascript-asyncawait/
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Therefore:
 
* no transpiling is performed
* `package.json` specifies `"main": "build/cli.mjs"` as per: https://nodejs.org/api/esm.html#esm_enabling and
https://github.com/nodejs/node-eps/blob/master/002-es-modules.md#44-shipping-both-esm-and-cjs
* `package.json` specifies `"module": "build/cli.mjs"` as per: https://github.com/rollup/rollup/wiki/pkg.module
* it is necessary to ensure that:
    * Rollup is executed with the `--experimentalDynamicImport` argument.
    * ESLint is configured to use the `babel-eslint` parser.

---
 
Legacy CommonJS format npm packages are supported for internal consumption by the following Rollup plugins:

* `rollup-plugin-node-resolve`
* `rollup-plugin-commonjs`

---

The module is generated without browser replacements for NodeJS packages via:

```external: ['tty', 'util', 'os'],```

### Install
`npm install`
`npm link '@es6-isomorphic-packaging/lib` 

There might be some faffing around with needing to remove the `'@es6-isomorphic-packaging/lib` dependency to get the install to work, then
adding it back in and then linking it.

### Watch Source
`npm run dev`

### Run
`node --experimental-modules build/cli.mjs`

Enable debug logging:

`DEBUG=* node --experimental-modules build/cli.mjs`

You should see an error logged:

`lib:log error when dynamically importing '@es6-isomorphic-packaging/plugin! => Cannot find module '@es6-isomorphic-packaging/plugin`

Now link in the plugin and try again:

```
npm link '@es6-isomorphic-packaging/plugin
DEBUG=* node --experimental-modules build/cli.mjs
```
This time there should be no error as the module is found when the dynamic import is performed.

