const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath,distPath } = require('./paths')

module.exports = {
    entry:{
        'index':path.join(srcPath, 'index.js'),
        'other':path.join(srcPath, 'other.js')
    },
    output:{
        path:distPath,
        filename:'js/[name]-[contenthash:8].js', 
        clean:true
    },
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
                test:/\.css$/,
                include:srcPath,
                exclude:/node_modules/,
                use:['style-loader','css-loader','postcss-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:path.join(srcPath,'index.html'),
            filename:'index.html',
            chunks:['index','vendor','common']
        }),
        new HtmlWebpackPlugin({
            template:path.join(srcPath,'other.html'),
            filename:'other.html',
            chunks:['other','vendor','common']
        })
    ]
}

