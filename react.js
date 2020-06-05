module.exports = () => {
  return {
    presets: [
      '@babel/preset-react'
    ],
    env: {
      production: {
        plugins: [
          [
            'transform-react-remove-prop-types',
            {
              removeImport: true
            }
          ]
        ]
      }
    }
  }
}