## Sample Browser Runtime

Output is a ES2015 module. Currently there is no intention to output non-ES2015 modules, nor support browsers or 
NodeJS versions which don't support features such as:

* https://github.com/tc39/proposal-dynamic-import
* https://tc39.github.io/ecmascript-asyncawait/
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Therefore:
 
* no transpiling is performed
* `package.json` specifies `"browser": "build/workbench.js"` as per: https://docs.npmjs.com/files/package.json#browser
* it is necessary to ensure that:
    * Rollup is executed with the `--experimentalDynamicImport` argument.
    * ESLint is configured to use the `babel-eslint` parser.

---
 
Legacy CommonJS format npm packages are supported for internal consumption by the following Rollup plugins:

* `rollup-plugin-node-resolve`
* `rollup-plugin-commonjs`

---

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
`npm link @f10r/lib` 

There might be some faffing around with needing to remove the `@f10r/lib` dependency to get the install to work, then
adding it back in and then linking it.

# Watch Source and Launch Browser with Hot Reload
`npm run watch`

Enable debug logging in the browser local storage settings:

`localStorage.debug = *`

You should see a 404 error logged when trying to dynamically load the `plugin` module.

Now link in the plugin and try again:

```
npm link @f10r/plugin
```
After a browser refresh, there should be no error as the module is found when the dynamic import is performed.

NOTE: Instead of linking locally and serving from the same web server, the intention is to instead serve plugins published to NPM via https://unpkg.com


