module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: ['airbnb-base', 'eslint:recommended'],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        'arrow-parens': 'off',
        eqeqeq: 'off',
        'function-paren-newline': 'off',
        indent: ['error', 4],
        'linebreak-style': [2, 'unix'],
        'no-console': [
            'error',
            {
                allow: ['log', 'info', 'warn', 'error', 'time', 'timeEnd'],
            },
        ],
        'no-duplicate-imports': 'error',
        'no-extra-parens': 'error',
        'no-return-await': 'error',
        'no-shadow': [
            'error',
            {
                builtinGlobals: false,
                hoist: 'functions',
                allow: [],
            },
        ],
        'operator-linebreak': [2, 'after', { overrides: { '?': 'after' } }],
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
        'implicit-arrow-linebreak': 'off',
    },
};
