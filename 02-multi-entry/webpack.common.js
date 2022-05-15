const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {srcPath,distPath} = require('./paths')

module.exports = {
    entry:{
        'index':path.join(srcPath,'index.js'),
        'other':path.join(srcPath,'other.js')
    },
    output:{
        path: distPath,
        filename:'js/[name]-[contenthash:8].js',
        // assetModuleFilename:path.join(distPath,'/fonts'),
        clean:true
    },
    module:{
        rules: [
            {
                test:/\.m?js$/,
                include: srcPath,
                exclude:/node_module/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
    
                }
            },
            {
                test:/\.css$/,
                include: srcPath,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader','postcss-loader'],
            },
            {
                test:'/\.(ttf|woff|svg|eot)$/',
                // loader:'file-loader',
                // options:{
                //     name: '[name].[ext]',
                //     outputPath:'fonts'
                //  }
                //webpack5
                type:'asset/resource'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(srcPath,'index.html'),
            filename:'index.html',
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            template:path.join(srcPath,'other.html'),
            filename:'other.html',
            chunks:['other']
        })
    ]
}