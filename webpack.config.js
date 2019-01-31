const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    // Mode configuration
    // Development or Production

    mode: 'development',
    

    //Server Configurations
    devServer : {
        contentBase : path.join(__dirname, 'dist'),
        compress : true,
        port: 9000
    },

    // Input & Output
    entry : './src/js/index.js',
    
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : './src/js/bundle.js'
    },

    // Plugins

    plugins : [
        new htmlWebpackPlugin()
    ]
        
};