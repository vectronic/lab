import cleanup from 'rollup-plugin-cleanup';
import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import globals from 'rollup-plugin-node-globals';
import json from 'rollup-plugin-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import ts from 'typescript';
import tempDir from 'temp-dir';

module.exports = [
    {
        input: {
            index: 'src/index.ts'
        },
        output: {
            dir: 'dist',
            format: 'es',
            sourcemap: true
        },
        watch: {
            include: 'src/**',
        },
        external: [
            'crypto',
            'fs',
            'os',
            'path',
            'tty',
            'util',
            'zlib',
            'child_process',
            'module',
            'assert',
            'events',
            'readline',
            'stream',
            'http',
            'https',
            'url'
        ],
        plugins: [
            peerDepsExternal(),
            eslint({
                include: [
                    'src/**/*.ts'
                ]
            }),
            json(),
            typescript({
                typescript: ts,
                useTsconfigDeclarationDir: true,
                cacheRoot: `${tempDir}/.rpt2_cache`
            }),
            commonjs(),
            globals({
                process: false,
                global: false,
                buffer: false
            }),
            resolve({
                preferBuiltins: true
            }),
            cleanup({
                extensions: ['ts']
            })
        ]
    }
];
