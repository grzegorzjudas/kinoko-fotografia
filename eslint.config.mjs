import stylistic from '@stylistic/eslint-plugin';
import tslint from 'typescript-eslint';

const stylisticBase = stylistic.configs.customize({
    indent: 4,
    quotes: 'single',
    semi: true,
    jsx: true,
    commaDangle: 'always',
    braceStyle: '1tbs',
});

export default tslint.config([
    /* Globally ignore these folders */
    {
        ignores: ['dist', 'node_modules'],
    },

    /* Code style rules from official ESLint stylistic package */
    {
        files: ['**/*.{js,ts,jsx,tsx,mjs,cjs}'],
        languageOptions: {
            parser: tslint.parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        ...stylisticBase,
        plugins: {
            ...stylisticBase.plugins,
            '@typescript-eslint': tslint.plugin,
        },
        rules: warnOnly({
            ...stylisticBase.rules,
            '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
            '@stylistic/comma-dangle': ['error', 'always-multiline'],
            '@typescript-eslint/consistent-type-imports': ['error'],
        }),
    },
]);

function warnOnly(rules) {
    for (const [key, value] of Object.entries(rules)) {
        if (Array.isArray(value)) {
            value[0] = 'warn';
            rules[key] = value;
        }
        if (typeof value === 'string') {
            rules[key] = 'warn';
        }
    }

    return rules;
}
