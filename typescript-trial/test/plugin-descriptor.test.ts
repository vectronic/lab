import { PluginDescriptor } from '../src'
import { Plugin } from '../src'

/**
 * Plugin Descriptor test
 */
describe('Plugin Descriptor test', () => {

    it('works if true is truthy', () => {
        expect(true).toBeTruthy()
    });

    it('PluginDescriptor is instantiable', () => {
        expect(new PluginDescriptor(new Plugin('foo'))).toBeInstanceOf(PluginDescriptor)
    });
});
