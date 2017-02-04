var path = require('path');
var webpack = require('webpack');
const APP_DIR = path.resolve(__dirname, 'dev');
const BUILD_DIR = path.resolve(__dirname, 'src');
var config = {

    devServer:{
        inline: true,
        contentBase:'./src',
        port: 3000,
        proxy: { 
            '/**': {  //catch all requests
              target: '/index.html',  //default target
              secure: false,
              bypass: function(req, res, opt){
                //your custom code to check for any exceptions
                //console.log('bypass check', {req: req, res:res, opt: opt});
                if(req.path.indexOf('/img/') !== -1 || req.path.indexOf('/public/') !== -1){
                  return '/'
                }

                if (req.headers.accept.indexOf('html') !== -1) {
                  return '/index.html';
                }
              }
            }
        }
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
