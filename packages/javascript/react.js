module.exports = {
  extends: ['airbnb', 'prettier/react', './common'],
  env: {
    node: true,
    browser: true
  },
  plugins: ['react-hooks'],
  settings: {
    react: {
      version: 'detect'
    }
  }
}
