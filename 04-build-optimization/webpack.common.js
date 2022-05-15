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
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            template:path.join(srcPath,'other.html'),
            filename:'other.html',
            chunks:['other']
        })
    ]
}

