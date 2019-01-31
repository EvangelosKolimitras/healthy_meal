const path = require('path');

module.exports = {
    
    devServer : {
        contentBase : path.join(__dirname, 'dist'),
        compresion : true,
        port: 9000
    }
        
}