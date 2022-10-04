module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: "standard",
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    "linebreak-style": "off",
    semi: ["error", "always"],
    quotes: ["error", "double"]

  }
};
