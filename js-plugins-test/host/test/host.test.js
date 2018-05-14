import test from 'ava';
import host from '../src/host.js';

test('2 + 2 = 4', t => {
    t.is(host(2, 2), 4);
});
