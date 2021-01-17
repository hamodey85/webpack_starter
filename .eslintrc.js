const path = require('path');

module.exports={
  env: {
    browser: true,
    es2021: true
  },
  plugins: ["html", "prettier"],
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
        project: path.resolve(__dirname, './tsconfig.json'),
        tsconfigRootDir: __dirname,
        ecmaVersion: 12,
        sourceType: 'module',
  },
 settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    "no-console":2,
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto",
        "tabWidth": 2,
        "semi": false
        // "trailingComma": "es5",
        // "singleQuote": true,
        // "printWidth": 100
      }
    ],
    "semi": "off",
    "comma-dangle": ["off", "always-multiline"],
    "@typescript-eslint/indent": ["error", 2],
    "max-len": [0, 160, 2, { "ignoreUrls": true }],
    "import/extensions": [
          "error",
          "ignorePackages",
          {
            "js": "never",
            "jsx": "never",
            "ts": "never",
            "tsx": "never"
          }
      ]
    // "@typescript-eslint/ban-ts-ignore": ["off"],
    // "@typescript-eslint/camelcase": ["off"],
    // "@typescript-eslint/explicit-function-return-type": ["off"],
    // "@typescript-eslint/interface-name-prefix": ["off"],
    // "@typescript-eslint/no-explicit-any": ["off"],
    // "@typescript-eslint/no-unused-expressions": ["off"],
    // "@typescript-eslint/no-var-requires": ["off"],
    // "@typescript-eslint/no-use-before-define": ["off"]

    // "no-async-promise-executor": ["off"]
    // "no-empty-pattern": ["off"]
    // "object-curly-spacing": ["error", "always"]

    // "spaced-comment": ["off"],
    // "no-prototype-builtins": ["off"],
    // "sort-keys": ["off"]
    // "space-before-function-paren": ["off"],
    // "indent": ["error", "tab"]

    // "quotes": ["off", "double", { "allowTemplateLiterals": true }],
    // "no-undef": ["error"],
    // "no-var": ["error"],
  }
}
