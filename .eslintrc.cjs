module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ["eslint:recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    },
    {
      env: {
        node: true
      },
      files: ["build/**/*.mjs"]
    },
    {
      files: ["**/*.ts", "**/*.js", "**/*.cjs", "**/*.mjs"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      plugins: ["@typescript-eslint"]
    }
  ],
  rules: {
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"]
  }
};
