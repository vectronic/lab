// eslint-disable-next-line import/no-unresolved
import { debug } from 'debug';

const log = debug('PluginDescriptor');

/**
 * Descriptor for a {@link Plugin}
 */
export default class PluginDescriptor {

    /**
     * Constructor
     *
     * @param {!Plugin} plugin the {@link Plugin} this is a descriptor for
     */
    constructor(plugin) {
        /**
         * @type {Plugin}
         */
        this.plugin = plugin;
    }

    /**
     * Dump information to log
     */
    dump() {
        log('PluginDescriptor:');
        this.plugin.dump();
    }
}
