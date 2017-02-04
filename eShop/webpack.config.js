var path = require('path');
var webpack = require('webpack');
const APP_DIR = path.resolve(__dirname, 'dev');
const BUILD_DIR = path.resolve(__dirname, 'src');
var config = {

    devServer:{
        inline: true,
            contentBase:'./src',
            port: 3000
    },
    /*generate source map for debugging*/
    devtool:'cheap-module-eval-source-map',
        entry:"./dev/js/index.js",
        output:{
        path:'src',
            filename:"js/bundle.min.js"
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