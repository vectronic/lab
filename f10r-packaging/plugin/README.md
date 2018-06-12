## Sample Dynamic Plugin

Output consists of two ES2015 modules: one for browser usage and one for NodeJS usage. 

Currently there is no intention to output non-ES2015 modules, nor support browsers or 
NodeJS versions which don't features such as:

* https://github.com/tc39/proposal-dynamic-import
* https://tc39.github.io/ecmascript-asyncawait/
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Therefore:
 
* no transpiling is performed
* `package.json` specifies `"main": "build/plugin.node.mjs"` as per: https://nodejs.org/api/esm.html#esm_enabling and
https://github.com/nodejs/node-eps/blob/master/002-es-modules.md#44-shipping-both-esm-and-cjs
* `package.json` specifies `"module": "build/plugin.node.mjs"` as per: https://github.com/rollup/rollup/wiki/pkg.module
* `package.json` specifies `"browser": "build/plugin.browser.js"` as per: https://docs.npmjs.com/files/package.json#browser
* it is necessary to ensure that:
    * Rollup is executed with the `--experimentalDynamicImport` argument.
    * ESLint is configured to use the `babel-eslint` parser.

---
 
Legacy CommonJS format npm packages are supported for internal consumption by the following Rollup plugins:

* `rollup-plugin-node-resolve`
* `rollup-plugin-commonjs`

---

The `plugin.node.mjs` module is generated without browser replacements for NodeJS packages via:

```external: ['tty', 'util', 'os'],```

The `plugin.browser.js` module is generated for browser support by:

* using browser variants of dependencies when available:
    ```
    resolve({
        browser: true
    })
    ```
* Providing replacements for NodeJS packages such as `tty` and `util` via the following Rollup plugins:
    * `rollup-plugin-node-builtins`
    * `rollup-plugin-node-globals`
 
The browser module build also performs minification and produces a sidecar sourcemap.

### Install
`npm install`

### Watch Source
`npm run dev`

### Expose for Consumption in Sibling Projects
`sudo npm link` 
