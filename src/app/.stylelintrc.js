module.exports = {
  ignoreFiles: [
    '**/node_modules/**',
  ],
  plugins: [
    'stylelint-order'
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
    'stylelint-config-styled-components',
    // 'stylelint-config-recommended-scss'
  ],
  rules: {
    'string-quotes': 'single',
    'value-keyword-case': ['lower', {
      ignoreProperties: ["/props/", "display"]
    }],
    'declaration-bang-space-before': 'never'
  }
}
