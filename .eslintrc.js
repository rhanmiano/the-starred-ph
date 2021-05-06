module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/attribute-hyphenation': ['never'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  globals: {
    $nuxt: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
  ],
}
