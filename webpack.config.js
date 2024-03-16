const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {

    entry: './src/index.js',

    output: {

       publicPath: '/',
        path: path.resolve(__dirname, 'app'),

        filename: 'app.js'

    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
            compress: true,
            port: 9000,
            devMiddleware: {
            writeToDisk: true,
        },
    },
    module: {

        rules: [

          {

            test: /\.html$/i,

            loader: 'html-loader',

          },
          {

            test: /\.(sass|css|scss)$/,

            use: [

              MiniCssExtractPlugin.loader,

              "css-loader",
              "postcss-loader",
              "sass-loader",

            ],

          },
          {

            test: /\.(svg|eot|woff|woff2|ttf)$/,
            exclude: /images/,
    
            use: [
    
              {
    
                loader: "file-loader", 
    
                options: {
    
                  name: '[name].[ext]',
    
                  outputPath: "assets/fonts",
    
                }
    
              }
    
            ]
    
          },
        ]
    },

    plugins: [

        new CleanWebpackPlugin(),
        new OptimizeCSSAssetsPlugin({}),
        new MiniCssExtractPlugin({
            filename: "assets/css/styles.css"
        }),
        new HtmlWebpackPlugin({

            filename: 'index.html',

            template: './src/index.html',

        }),

    ]

}