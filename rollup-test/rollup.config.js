import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import node_resolve from 'rollup-plugin-node-resolve';
import node_builtins from 'rollup-plugin-node-builtins';

export default {
    input: 'src/main.js',
    output: {
        file: 'build/bundle.js',
        format: 'cjs'
    },
    plugins: [ json(), commonjs(), node_resolve(), node_builtins({'fs': true})]
};
