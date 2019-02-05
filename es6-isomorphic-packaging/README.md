## Sample Isomorphic (Browser and NodeJS Runtime) Dynamic Plugin Framework 

Making use of:
 
* [ES2015 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) 
* [Dynamic Imports](https://github.com/tc39/proposal-dynamic-import)
* [Classes and Extensions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)

Structure of the source:


* `workbench` is a browser webapp runtime
* `cli` is a NodeJS CLI runtime
* `api` is a sample plugin framework API 
* `framework` is a sample plugin framework implementation
* `plugin` is a sample plugin which can be imported by a runtime using the plugin framework
 
