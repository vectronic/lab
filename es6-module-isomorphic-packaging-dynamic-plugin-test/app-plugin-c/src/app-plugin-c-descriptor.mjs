import Debug from 'debug';
import { PluginDescriptor } from '@es6-module-isomorphic-packaging-dynamic-plugin-test/plugin-framework-api';

const log = Debug('Plugin');

/**
 * An example App Extension Point Plugin Descriptor
 */
export default class AppPluginCDescriptor extends PluginDescriptor {

    /**
     * Dump information to log
     */
    dump() {
        log('AppPluginCDescriptor:');
        super.dump();
    }
}
