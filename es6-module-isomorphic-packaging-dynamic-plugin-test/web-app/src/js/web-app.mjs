import Debug from 'debug';

import { AppExtensionPoint } from '@es6-module-isomorphic-packaging-dynamic-plugin-test/app-plugin-api';
import { AppPluginA } from '@es6-module-isomorphic-packaging-dynamic-plugin-test/app-plugin-a';

const log = Debug('WebApp');

/**
 * A Web App
 */
export default class WebApp {

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
        log('WebApp:');
        log(`staticImportPlugin instanceof AppExtensionPoint: ${this.staticImportPlugin instanceof AppExtensionPoint}`);
        this.staticImportPlugin.dump();
    }
}
