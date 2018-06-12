import debug from 'debug';
import libUtil from './util/util';
import {version} from '../package.json';

const log = debug('lib:log');

log(`lib version ${version}`);

let dynamicImport = async function( moduleName ) {
    try {
        log(`dynamicImport(${moduleName})`);
        const module = await import(moduleName);
        module.default();
        return `${moduleName} imported and default invoked`;
    }
    catch (error) {
        log(`error when dynamically importing ${moduleName}! => ${error.message}`);
    }
};

export function importPlugin( moduleName ) {
    log('importPlugin');
    dynamicImport(moduleName).then(v => {
        log(`${moduleName} => ${v}`);
    });
}

export function sayHelloTo( name ) {
    log('sayHelloTo');
    libUtil();
    return `Hello, ${name}!`;
}

export function sayGoodbyeTo( name ) {
    log('sayGoodbyeTo');
    libUtil();
    return `Later, ${name}!`;
}

export function addArray( arr ) {
    log('addArray');
    libUtil();
    return arr.reduce((a, b) => a + b, 0);
}
