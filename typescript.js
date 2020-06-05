module.exports = () => {
  return {
    plugins: [
      [
        '@babel/plugin-transform-typescript',
        {
          isTSX: true
        }
      ]
    ]
  }
}