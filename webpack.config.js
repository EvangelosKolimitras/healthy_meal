const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // Mode configuration
    // development or production
    mode : 'development',
    

    //Server Configurations
    devServer : {
        contentBase : path.join( __dirname , 'dist'),
        compress : true,
        port: 9000
    },

    // Input & Output
    entry : [
        './src/js/app.js'
    ],

    output : {
        path : path.resolve( __dirname , 'dist'),
        filename : './src/js/bundle.js'
    },

    // Plugins

    plugins : [ 
        new htmlWebpackPlugin({
            template : './src/index.html'
        })
    ],

    module: {
        rules: [
            {   test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            
            {
                test : /\.(sc|sa|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
      }
        
};