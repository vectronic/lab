import { sayHelloTo } from './modules/mod1';
import addArray from './modules/mod2';
import { version } from '../../package.json';

// Import a logger for easier debugging.
import debug from 'debug';

const log = debug('app:log');

// The logger should only be disabled if we’re not in production.
if (ENV !== 'production') {

    // Enable the logger.
    debug.enable('*');
    log('Logging is enabled. version = ' + version);
}
else {
    debug.disable();
}

// Run some functions from our imported modules.
const result1 = sayHelloTo('Json');
const result2 = addArray([1, 2, 3, 4]);

// Print the results on the page.
const printTarget = document.getElementsByClassName('debug__output')[0];

printTarget.innerText =  `sayHelloTo("Json") => ${result1}\n\n`;
printTarget.innerText += `addArray([1, 2, 3, 4]) => ${result2}\n\n`;

let dynamicExample = async function() {
    try {
        const module = await import('./modules/mod3');
        return module.default([1, 2, 3, 4]);
    }
    catch (error) {
        log(error.message);
    }
};

dynamicExample().then(v => {
    printTarget.innerText += `multiplyArray([1, 2, 3, 4]) => ${v}`;
});
