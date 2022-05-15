const path= require('path');
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const { srcPath,distPath } = require('./paths')


module.exports = merge(webpackCommonConf,{
    mode:'development',
    entry:{
        index:['webpack-dev-server/client?http://localhost:8008/','webpack/hot/dev-server.js',path.join(srcPath,'index.js')], 
        other:path.join(srcPath,'other.js')
    },
    target: "web",
    module:{
        rules:[
            {
                test:/\.m?js$/,
                include: srcPath,
                exclude:/node_module/,
                use:{
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
              {
                 test:/\.(png|jpg|jpeg|gif)$/,
                 loader: 'file-loader'
                 //type: 'asset/resource'
              }
        ]
    },
    // watch: true,
    // watchOptions: {
    //     aggregateTimeout: 300,
    //     ignored:['**/node_modules/'],
    //     poll: 1000
    // },

    plugins: [
        new webpack.DefinePlugin({
            //window.ENV = 'production';
            ENV: JSON.stringify('development')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        port:8008,
        hot:true,
        liveReload: false,
        client: {progress: true},  //打包显示进度条
        static: {
            directory: srcPath, //根目录
            // publicPath: '/serve-public-path-url',
          },
        open:true, //自动打开
        compress:true //开启压缩
    },
    optimization: {
        runtimeChunk: 'single'
    },
})