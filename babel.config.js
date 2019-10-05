module.exports = ({ env }) => {
  const isTest = env('test')

  return {
    presets: [
      [
        '@babel/preset-env',
        isTest
          ? { targets: { node: 'current' } }
          : {
            // Preserve ES6 modules format, needed for tree shaking
            modules: false,
            useBuiltIns: 'usage',
            corejs: 3
          }
      ]
    ]
  }
}
