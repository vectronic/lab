import json from 'rollup-plugin-json';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/cli.js',
    output: {
        file: 'build/cli.mjs',
        format: 'es'
    },
    external: ['tty', 'util', 'os'],
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
