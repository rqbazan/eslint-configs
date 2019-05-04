module.exports = {
  extends: ['airbnb', 'prettier/react', require.resolve('./common')],
  env: {
    node: true,
    browser: true
  },
  plugins: ['react-hooks'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/prop-types': ['error', { skipUndeclared: true }]
  }
}
