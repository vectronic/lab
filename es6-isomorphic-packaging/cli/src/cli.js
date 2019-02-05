import debug from 'debug';
import cliUtil from './util/util';
import { version } from '../package.json';
import { sayHelloTo, addArray, importPlugin } from '@es6-isomorphic-packaging/framework';

const log = debug('cli:log');

log(`cli version ${version}`);

const result1 = sayHelloTo('Json');
const result2 = addArray([1, 2, 3, 4]);
cliUtil();

log(`sayHelloTo('Json') => ${result1}`);
log(`addArray([1, 2, 3, 4]) => ${result2}`);

importPlugin('@es6-isomorphic-packaging/plugin');
