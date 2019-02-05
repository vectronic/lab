import json from 'rollup-plugin-json';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/lib.js',
    output: {
        file: 'build/lib.mjs',
        format: 'es'
    },
    external: ['debug'],
    plugins: [
        json(),
        eslint({
            include: [
                'src/**'
            ]
        }),
        resolve(),
        commonjs()
    ]
};
