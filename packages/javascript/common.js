module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:prettier/recommended'],
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none'
      }
    ]
  }
}
