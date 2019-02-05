const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

module.exports = {

    // Mode configuration
    // development or production
    mode: 'development',


    //Server Configurations
    devServer: {
        contentBase: path.join( __dirname , 'dist' ),
        compress: true,
        port: 9000
    },

    // Input & Output
    entry: [
        '@babel/polyfill',
        './src/js/app.js'
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './src/js/bundle.js'
    },

    // Plugins

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },

            {
                test: /\.(sc|sa|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }

        ]
    },

    plugins: [

        new htmlWebpackPlugin({
            template: './src/index.html',
            hash: true
        }),

        new DuplicatePackageCheckerPlugin({
            emitError: true, // Emit errors instead of warnings (default: false)
            strict: false// Warn also if major versions differ (default: true)
        })
    ]
    
};