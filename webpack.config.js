const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WrapperPlugin = require('wrapper-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: "./public/wp-content/themes/wild-and-without/index.js",
    output: {
        path: path.resolve('./public/wp-content/themes/wild-and-without', 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|gif|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            },
            {
                test: /\.scss|.css$/,
                use:  [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new WrapperPlugin({
            test: /\.js$/,
            header: 'var sb_instagram_js_options = {"sb_instagram_at":"","font_method":"svg"};'
        }),
    ],
    externals: {
        jquery: 'jQuery'
    },
}
