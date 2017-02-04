var path = require('path');
var webpack = require('webpack');
const APP_DIR = path.resolve(__dirname, 'dev');
const BUILD_DIR = path.resolve(__dirname, 'src');
var config = {

    devServer:{
        inline: true,
        port: 8080        
    },
    /*generate source map for debugging*/
    devtool:'cheap-module-eval-source-map',
    entry:"./src/index.js",
    output:{
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loaders:["babel-loader"],
                exclude:/node_modules/
            }/*,
            {
                test:/\.scss/,
                loader:'style-loader!css-loader!sass-loader'
            }*/
        ]
    },
    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
}

module.exports = config;