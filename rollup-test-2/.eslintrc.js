module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'globals': {
        'ENV': true
    },
    'extends': 'eslint:recommended',
    "parser": "babel-eslint",
    'parserOptions': {
        'sourceType': 'module',
        'ecmaVersion': 6
    },
    'rules': {
        "strict": 0,
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};