module.exports = {
  extends: ['rqbazan-js/react', require.resolve('./common')],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }]
  }
}
