import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import json from 'rollup-plugin-json';

export default {
    input: [
        'src/scripts/cli.js',
        'src/scripts/workbench.js'
    ],
    output: {
        dir: 'build/js',
        format: 'es',
        sourcemap: 'inline'
    },
    plugins: [
        json(),
        eslint({
            exclude: [
                'src/styles/**',
                'package.json'
            ]
        }),
        replace({
            exclude: 'node_modules/**',
            ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        resolve(),
        commonjs(),
        (process.env.NODE_ENV === 'production' && uglify())
    ]
};
