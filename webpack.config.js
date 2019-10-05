const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { path } = require('./config')

module.exports = (env = {}) => {
  const babelOptions = { cacheDirectory: true }

  return {
    target: 'web',
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? 'source-map' : 'eval-source-map',
    devServer: {
      hot: env.hot,
      contentBase: `./${path.build.root}`,
      overlay: true,
      historyApiFallback: true,
      watchContentBase: true
    },
    name: 'main',
    entry: `./${path.src.mainScript}`,
    output: {
      path: resolve(__dirname, path.build.scripts),
      filename: '[name].js',
      publicPath: path.build.scripts.replace(path.build.root, '')
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          externals: {
            test: /[\\/]node_modules[\\/]/,
            name: 'externals',
            chunks: 'all'
          }
        }
      }
    },
    resolve: {
      extensions: ['.mjs', '.mjs', '.ts', '.tsx', '.js', '.jsx'],
      // Avoid some dependencies being bundled as duplicates due to path difference
      modules: [
        resolve(__dirname, 'node_modules')
      ]
    },
    module: {
      strictExportPresence: true,
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            env.production
              ? {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  hmr: env.hot
                }
              }
              : 'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }, {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: babelOptions
            },
            'ts-loader'
          ]
        }, {
          test: /\.m?jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: babelOptions
          }
        }
      ]
    },
    plugins: [
      env.production
        ? new webpack.HashedModuleIdsPlugin()
        : new webpack.NamedModulesPlugin(),
      // Prevent Moment from bundling all locales
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].[id].css'
      }),
      new HtmlWebpackPlugin()
    ]
  }
}
