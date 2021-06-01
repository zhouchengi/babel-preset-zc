module.exports = () => {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          corejs: 3,
          modules: false,
          exclude: ['transform-typeof-symbol']
        }
      ]
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-transform-object-assign',
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true
        }
      ],
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true
        }
      ],
      '@babel/plugin-proposal-json-strings',
      '@babel/plugin-proposal-function-sent',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-numeric-separator',
      '@babel/plugin-proposal-throw-expressions',
      '@babel/plugin-transform-modules-commonjs',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-logical-assignment-operators',
      '@babel/plugin-proposal-optional-chaining',
      [
        '@babel/plugin-proposal-pipeline-operator',
        {
          proposal: 'minimal'
        }
      ],
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-do-expressions',
      ["@babel/plugin-proposal-private-methods", { "loose": true }]
    ],
    comments: false,
    compact: false
  }
}