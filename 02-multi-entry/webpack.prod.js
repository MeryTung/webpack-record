
const path = require('path');
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const {srcPath,distPath} = require('./paths')


module.exports = merge(webpackCommonConf,{
    mode: 'production',
    output:{
        path: distPath,
        filename:'js/[name]-[contenthash:8].js',
        clean:true
    },
    module:{
        rules: [
            {
                test:/\.(css|scss)$/,
                include: srcPath,
                exclude: /node_modules/,
                use:[
                    MiniCssExtractPlugin.loader, //这里不再用style-loader
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
                test:/.(png|jpg|jpeg|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        //小于5KB的图片用base64格式产出
                        //否则，依然沿用file-loader的形式，产出
                        limits:5 * 1024,
                        //打包到 img1目录下
                        outputPath: '/img1/',
                        //设置图片的 cdn 地址（也可以统一在外面output）
                       // publicPath: 'http://cdn.abc.com'
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify('production')
        }),
        //抽离css文件
        new MiniCssExtractPlugin({
            filename: 'css/main.[contenthash:8].css'
        })
    ],
    optimization: {
        //压缩
        minimizer: [new TerserPlugin({}), new CssMinimizerPlugin()]
    }
})