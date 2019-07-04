/**
 * @module @es6-module-isomorphic-packaging-dynamic-plugin-test/typescript-trial
 */
import debug from 'debug';


/**
 * A Plugin
 */
export class Plugin {

    public readonly name: string;
    private readonly log: debug.Debugger;


    /**
     * Constructor
     *
     * @param name - Name of the plugin
     */
    public constructor(name: string) {
        this.log = debug('Plugin');
        this.name = name;
    }


    /**
     * Dump information to log
     */
    public dump(): void {
        this.log(`name: ${this.name}`);
    }
}
