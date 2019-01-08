module.exports = {
  env: {
    es6: true,
    browser: true,
    jest: true
  },
  extends: "airbnb",
  rules: {
    "comma-dangle": ["error", "never"],
    "no-unused-vars": [
      "error",
      {
        vars: "local",
        args: "none"
      }
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "react/jsx-one-expression-per-line": [
      0,
      {
        allow: "single-child"
      }
    ],
    "react/forbid-prop-types": [
      "error",
      {
        forbid: ["any"],
        checkContextTypes: false,
        checkChildContextTypes: true
      }
    ],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "linebreak-style": ["error", "unix"]
  }
};
