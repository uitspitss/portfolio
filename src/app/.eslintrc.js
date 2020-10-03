module.exports = {
  "root": true,
  "plugins": ["jest", "react"],
  "env": {
    "es2020": true,
    "jest/globals": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "no-mixed-operators": "error",
    "no-console": "off",
    "no-undef": "off",
    "react/jsx-uses-vars": 1,
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off"
  },
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "parser": "@typescript-eslint/parser"
}
