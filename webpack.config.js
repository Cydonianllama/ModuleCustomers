const path = require('path')

process.env.BABEL_ENV = "development"

module.exports = {
    entry: path.resolve(__dirname,'src', 'client','index.js'),
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    resolve : {
        extensions : ['.js','.jsx']
    },
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                use : ['babel-loader']
            },
            {
                test : /\.css$/,
                use : ['style-loader','css-loader']
            }
        ]
    },
    devServer : {
        contentBase : path.resolve('dist'),
        historyApiFallback : true,
        port : 5000,
        compress: true
    },
    mode : 'development'
}