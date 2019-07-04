import Debug from 'debug';

import { AppExtensionPoint } from '@es6-module-isomorphic-packaging-dynamic-plugin-test/app-plugin-api';
import { AppPluginA } from '@es6-module-isomorphic-packaging-dynamic-plugin-test/app-plugin-a';

const log = Debug('NodeApp');

/**
 * A Node App
 */
export default class NodeApp {

    /**
     * Performs a static import of an example App Plugin
     */
    constructor() {
        this.staticImportPlugin = new AppPluginA();
    }

    /**
     * Dump information to log
     */
    dump() {
        log('NodeApp:');
        log(`staticImportPlugin instanceof AppExtensionPoint: ${this.staticImportPlugin instanceof AppExtensionPoint}`);
        this.staticImportPlugin.dump();
    }
}
