import * as debug_ from 'debug';
import { Plugin } from './plugin';

const debug = debug_;
const log = debug('PluginDescriptor');

/**
 * Descriptor for a [[Plugin]]
 */
export class PluginDescriptor {

    public readonly plugin: Plugin;

    /**
     * Constructor
     *
     * @param plugin - the [[Plugin]] this is a descriptor for
     */
    public constructor(plugin: Plugin) {
        this.plugin = plugin;
    }

    /**
     * Dump information to log
     */
    public dump(): void {
        log('PluginDescriptor:');
        this.plugin.dump();
    }
}
