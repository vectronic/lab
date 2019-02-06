import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/ts/index.ts',
    output: {
        file: 'dist/index.mjs',
        format: 'es'
    },
    watch: {
        include: 'src/ts/**',
    },
    plugins: [
        peerDepsExternal(),
        eslint({
            include: [
                'src/ts/**'
            ]
        }),
        resolve(),
        commonjs(),
        typescript({
            typescript: require('typescript'),
            useTsconfigDeclarationDir: true
        })
    ]
};
