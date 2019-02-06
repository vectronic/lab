import * as debug_ from 'debug';
import { Plugin } from './plugin';

const debug: typeof debug_ = debug_;
const log = debug('PluginDescriptor');

/**
 * Descriptor for a [[Plugin]]
 */
class PluginDescriptor {

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
        log(this.plugin.dump());
    }
}

export { PluginDescriptor };
