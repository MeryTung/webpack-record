
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  devtool:'eval',
  entry:{
    'index':path.join(__dirname,'src','index.js'),
    // 'main':path.join(__dirname,'src','main.js'),
    // 'commonJs':path.join(__dirname,'src','moduleB.js'),
    // 'polyfills': path.join(__dirname,'src','polyfills')
  },

  output:{
    // publicPath:'http://www.csmumiao.com',
    path:path.resolve(__dirname,'dist'),
    filename:'[name].[contenthash].js',
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true
  },
devServer: {
  static: {
    directory: path.join(__dirname, 'dist'),
  },
  compress: true,
  port: 8000,
},
plugins:[
  new HtmlWebpackPlugin({
      template:path.join(__dirname,'src','index.html'),
      output:{
        path:path.join(__dirname,'dist'),
        filename:'index.html'
      }
})
],
optimization: {
  runtimeChunk: 'single',
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
          presets: [
            [
              '@babel/preset-env',
              // {
              //   useBuiltIns:'usage'
              // }
          ]
          ]
        }
      }
    },
    {
      test:/\.(css|scss)$/,
      include:path.join(__dirname,'src'),
      exclude: /node_modules/,
      use:[
      'style-loader',
      {
        loader: 'css-loader',
        options: {
        //  modules: true,
          // importloaders: 1
        }
      },
      {
       loader: 'postcss-loader',
        options: {
            postcssOptions: {
              plugins:[
                ['autoprefixer']
              ]
            }
        }
      },
      'sass-loader'
    ]
    },
    {
      test: /\.(jpg|png|gif|svg)$/,
      include: path.join(__dirname,'src'),
      exclude: /node_modules/,
      
      use: {
        loader:'url-loader',
        options:{
          name: '[name].[ext]',
          outputPath:'images/',
          limit:2048
        },
      },
      //或者用webpack5 写法
      // type:'asset/resource',
     
    },
    {
      test:/\.(ttf|woff|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath:'fonts'
      }
    }
  ]
}
}