module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:prettier/recommended'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-plusplus': 'off',
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
