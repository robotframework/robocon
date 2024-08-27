module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "plugins": [
    "sonarjs",
    "unused-imports",
    "sort-exports"
  ],
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2020
  },
  "rules": {
    "@typescript-eslint/no-explicit-any": "off",
    "vue/no-unused-components": "warn",
    "vue/no-multiple-template-root": "off",
    "no-unused-vars": "warn",
    "vue/multi-word-component-names": [
      "error",
      {
        "ignores": [
          "default"
        ]
      }
    ],
    "space-before-function-paren": [
      "warn",
      "never"
    ],
    "indent": [
      2,
      2
    ],
    "sort-exports/sort-exports": [
      "error",
      {
        "sortDir": "asc",
        "ignoreCase": true,
        "sortExportKindFirst": "type"
      }
    ],
    "sort-imports": [
      "error",
      {
        "ignoreCase": false,
        "ignoreDeclarationSort": true,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": [
          "none",
          "all",
          "multiple",
          "single"
        ],
        "allowSeparatedGroups": true
      }
    ],
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts",
        ".vue",
        ".js"
      ]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true,
        // use a glob pattern
        "project": "packages/*/tsconfig.json"
      }
    }
  },
}