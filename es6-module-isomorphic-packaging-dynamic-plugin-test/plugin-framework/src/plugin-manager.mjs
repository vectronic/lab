import Debug from 'debug';

const log = Debug('PluginManager');

/**
 * Plugin framework manager
 */
export default class PluginManager {

    /**
     * Constructor
     */
    constructor() {
        /**
         * @type {Array<PluginDescriptor>}
         */
        this.pluginDescriptors = [];
    }


    /**
     * Registers the specified {PluginDescriptor}
     *
     * @param {PluginDescriptor} pluginDescriptor the {PluginDescriptor} to register
     */
    registerPlugin(pluginDescriptor) {
        this.pluginDescriptors.push(pluginDescriptor);
    }


    /**
     * Scans the specified location for modules exposing a {PluginDescriptor} and register any discovered
     *
     * @param {String} path a path wildcard to scan for plugin modules
     */
    scanForPlugins(path) {
        // this.pluginDescriptors.push(pluginDescriptor);
    }


    /**
     * Return the registered {PluginDescriptor} instances which relate to a {Plugin} which extends
     * the specified class.
     *
     * @param {class} extensionPoint a class which is a plugin extension point
     *
     * @return {Array<PluginDescriptor>} an array of PluginDescriptor instances
     */
    getExtensions(extensionPoint) {
        // this.pluginDescriptors.push(pluginDescriptor);
    }


    /**
     * Return an instance of the {Plugin} referred to by the specified {PluginDescriptor}.
     *
     * @param {PluginDescriptor} pluginDescriptor the {PluginDescriptor} for the desired {Plugin}
     *
     * @return {Plugin} a {Plugin} instance
     */
    instantiate(pluginDescriptor) {
        // this.pluginDescriptors.push(pluginDescriptor);
    }


    /**
     * Dump information to log
     */
    dump() {
        log('PluginManager: ');
        this.pluginDescriptors.forEach((pluginDescriptor) => {
            pluginDescriptor.dump();
        });
    }
}
