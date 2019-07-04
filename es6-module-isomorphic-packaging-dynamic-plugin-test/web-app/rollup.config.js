import builtins from 'rollup-plugin-node-builtins';
import cleanup from 'rollup-plugin-cleanup';
import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import globals from 'rollup-plugin-node-globals';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/js/index.mjs',
    output: {
        file: 'dist/index.mjs',
        format: 'es',
        sourcemap: true
    },
    watch: {
        include: 'src/**',
    },
    plugins: [
        peerDepsExternal(),
        eslint({
            include: [
                'src/js/**'
            ]
        }),
        resolve(),
        commonjs(),
        globals(),
        builtins(),
        cleanup({})
    ]
};
