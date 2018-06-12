import debug from 'debug';
import workbenchUtil from './util/util';
import { version } from '../../package.json';
import { sayHelloTo, addArray, importPlugin } from '@t9r/lib';

const log = debug('workbench:log');

log(`workbench version ${version}`);

const result1 = sayHelloTo('Json');
const result2 = addArray([1, 2, 3, 4]);
workbenchUtil();

const printTarget = document.getElementsByClassName('debug__output')[0];

printTarget.innerText =  `sayHelloTo("Json") => ${result1}\n\n`;
printTarget.innerText += `addArray([1, 2, 3, 4]) => ${result2}\n\n`;

importPlugin('./@t9r/plugin/build/plugin.browser.js');
