const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const allModes = [
    'eval',
    'eval-cheap-source-map',
    'eval-cheap-module-source-map',
    'eval-source-map',
    'cheap-source-map',
    'cheap-module-source-map',
    'inline-cheap-source-map',
    'inline-cheap-module-source-map',
    'source-map',
    'inline-source-map',
    'hidden-source-map',
    'nosources-source-map'

  ]
module.exports = allModes.map(item => ({
    mode: 'none',
    devtool: item,
    entry: {
        'index': path.join(__dirname,'src','index.js')
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:`js/${item}.js`,
        clean: true
    },
    devServer: {
        static: {
            directory: path.join(__dirname,'dist')
        },
        compress: true,
        port: 8008
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            include:path.join(__dirname,'src'),
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          filename: `${item}.html`
        })
      ]
}))
   

    