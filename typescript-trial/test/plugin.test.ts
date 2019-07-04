import { Plugin } from '../src'

/**
 * Plugin test
 */
describe('Plugin test', () => {

    it('works if true is truthy', () => {
        expect(true).toBeTruthy()
    });

    it('Plugin is instantiable', () => {
        expect(new Plugin('foo')).toBeInstanceOf(Plugin)
    });
});
