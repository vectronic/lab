import json from 'rollup-plugin-json';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import uglify from 'rollup-plugin-uglify';

export default {
    input: 'src/js/workbench.js',
    output: {
        file: 'build/workbench.js',
        format: 'es',
        sourcemap: true
    },
    plugins: [
        json(),
        eslint({
            include: [
                'src/**'
            ]
        }),
        resolve({
            browser: true
        }),
        commonjs(),
        globals(),
        builtins(),
        uglify()
    ]
};
