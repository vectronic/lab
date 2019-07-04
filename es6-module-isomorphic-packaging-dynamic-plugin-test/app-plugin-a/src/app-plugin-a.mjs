import Debug from 'debug';
import { AppExtensionPoint } from '@es6-module-isomorphic-packaging-dynamic-plugin-test/app-plugin-api';

const log = Debug('Plugin');

/**
 * An example App Extension Point
 */
export default class AppPluginA extends AppExtensionPoint {

    /**
     * Dump information to log
     */
    dump() {
        log('AppPluginA:');
        super.dump();
    }
}
