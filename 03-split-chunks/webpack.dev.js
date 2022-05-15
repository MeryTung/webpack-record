const path = require('path')
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const { srcPath,distPath } = require('./paths')

module.exports = merge(webpackCommonConf,{
    mode:'development',
    module:{
        rules:[
              {
                 test:/\.(png|jpg|jpeg|gif)$/,
                 loader: 'file-loader'
                 //type: 'asset/resource'
              }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            //window.ENV = 'production';
            ENV: JSON.stringify('development')
        })
    ],
    devServer:{
        port:8008,
        client: {
            progress: true,  //打包显示进度条
          },
        static: {
            directory: srcPath, //根目录
            // publicPath: '/serve-public-path-url',
          },
        open:true, //自动打开
        compress:true //开启压缩
    }
})