module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': 'airbnb-base',
    'parser': 'babel-eslint',
    'parserOptions': {
        'sourceType': 'module',
        'ecmaVersion': 6
    },
    'rules': {
        'padded-blocks': 'off',
        'comma-dangle': 'off',
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ]
    }
};
