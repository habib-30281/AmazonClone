module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
    "max-len": ["error", { "code": 150 }],
    "object-curly-spacing": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": ["error", "consistent"],
    "array-bracket-newline": ["error", "consistent"],
    "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "no-trailing-spaces": "error",
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "semi": ["error", "always"],
  },
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
  globals: {},
};
