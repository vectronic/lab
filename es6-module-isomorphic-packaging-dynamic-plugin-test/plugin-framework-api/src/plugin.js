// eslint-disable-next-line import/no-unresolved
import { debug } from 'debug';

const log = debug('Plugin');

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
