module.exports = {
  plugins: {
    'postcss-preset-env': {
      browsers: 'last 2 versions',
    },
    'postcss-sorting': {
      order: [
        'custom-properties',
        'dollar-variables',
        'declarations',
        'at-rules',
        'rules',
      ],
    },
  },
}
