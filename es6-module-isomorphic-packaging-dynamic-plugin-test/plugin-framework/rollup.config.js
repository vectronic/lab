import cleanup from 'rollup-plugin-cleanup';
import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/index.mjs',
    output: {
        file: 'lib/index.mjs',
        format: 'es'
    },
    watch: {
        include: 'src/**',
    },
    plugins: [
        peerDepsExternal(),
        eslint({
            include: [
                'src/**'
            ]
        }),
        resolve(),
        commonjs(),
        cleanup({})
    ]
};
