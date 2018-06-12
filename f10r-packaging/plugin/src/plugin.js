import debug from 'debug';
import pluginUtil from './util/util';
import {version} from '../package.json';

const log = debug('plugin:log');

log(`plugin version ${version}`);

export default function sayPluginHello( name ) {
    log('sayPluginHello');
    pluginUtil();
    return `Plugin hello, ${name}!`;
}
