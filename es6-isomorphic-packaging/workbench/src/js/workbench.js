import debug from 'debug';
import workbenchUtil from './util/util';
import { version } from '../../package.json';
import { sayHelloTo, addArray, importPlugin } from '@es6-isomorphic-packaging/framework';

const log = debug('workbench:log');

log(`workbench version ${version}`);

const result1 = sayHelloTo('Json');
const result2 = addArray([1, 2, 3, 4]);
workbenchUtil();

const printTarget = document.getElementsByClassName('debug__output')[0];

printTarget.innerText =  `sayHelloTo("Json") => ${result1}\n\n`;
printTarget.innerText += `addArray([1, 2, 3, 4]) => ${result2}\n\n`;

importPlugin('./@es6-isomorphic-packaging/plugin/build/plugin.browser.js');
