import * as debug_ from 'debug';

const debug = debug_;
const log = debug('Plugin');

/**
 * A Plugin
 */
class Plugin {

    public readonly name: string;

    /**
     * Constructor
     *
     * @param name - Name of the plugin
     */
    public constructor(name: string) {
        this.name = name;
    }

    /**
     * Dump information to log
     */
    public dump(): void {
        log(`name: ${this.name}`);
    }
}

export { Plugin };
