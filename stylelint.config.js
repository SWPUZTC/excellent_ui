/** @type {import('stylelint').Config} */
export default {
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', 'node_modules/**', 'dist/**', 'docs/**'],
    extends: ['stylelint-config-standard'],
    plugins: ['stylelint-scss'],
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
    },
}
