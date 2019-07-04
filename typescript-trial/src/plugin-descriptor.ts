/**
 * @module @es6-module-isomorphic-packaging-dynamic-plugin-test/typescript-trial
 */
import debug from 'debug';

import { Plugin } from './plugin';

/**
 * Descriptor for a [[Plugin]]
 */
export class PluginDescriptor {

    public readonly plugin: Plugin;
    private readonly log: debug.Debugger;


    /**
     * Constructor
     *
     * @param plugin - the [[Plugin]] this is a descriptor for
     */
    public constructor(plugin: Plugin) {
        this.log = debug('PluginDescriptor');
        this.plugin = plugin;
    }


    /**
     * Dump information to log
     */
    public dump(): void {
        this.log('PluginDescriptor:');
        this.plugin.dump();
    }
}
