import Debug from 'debug';

const log = Debug('Plugin');

/**
 * An example App Extension Point
 */
export default class AppExtensionPoint {

    /**
     * Dump information to log
     */
    dump() {
        log('AppExtensionPoint');
    }
}
