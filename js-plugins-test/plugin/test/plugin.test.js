import test from 'ava';
import { sum } from '../src/plugin.js';

test('2 + 2 = 4', t => {
    t.is(sum(2, 2), 4);
});
