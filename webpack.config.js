const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports ={
    entry: './src/app.js',
    output: {
        path: __dirname + '/public/js',
        filename: ' bundle.js'
    },
    module:{
     loaders:[
         {
             test:/\.js$/,
             loader: 'babel-loader',
             exclude: /node_module/
         }
     ]
    }
};
   