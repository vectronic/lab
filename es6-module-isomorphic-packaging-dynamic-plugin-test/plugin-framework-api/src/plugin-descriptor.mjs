import Debug from 'debug';

const log = Debug('PluginDescriptor');

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
