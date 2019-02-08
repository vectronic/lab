module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 6
    },
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'plugin:@typescript-eslint/recommended'
    ],
    overrides: [
        {
            files: ['*.d.ts'],
            rules: {
                '@typescript-eslint/explicit-member-accessibility': 'off'
            }
        }
    ]
};
