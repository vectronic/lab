import cleanup from 'rollup-plugin-cleanup';
import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/js/index.js',
    output: {
        file: 'dist/index.mjs',
        format: 'es'
    },
    watch: {
        include: 'src/js/**',
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
        cleanup({})
    ]
};
