import Debug from 'debug';

const log = Debug('Plugin');

/**
 * A Plugin
 */
export default class Plugin {

    /**
     * Constructor
     *
     * @param {!string} name Name of the plugin
     */
    constructor(name) {
        this.name = name;
    }

    /**
     * Dump information to log
     */
    dump() {
        log(`name: ${this.name}`);
    }
}
