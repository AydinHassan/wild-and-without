const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackAssetsManifest = require('webpack-assets-manifest');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        main: "./public/wp-content/themes/wild-and-without/index.js",
        photography: "./public/wp-content/themes/wild-and-without/photography.js"
    },
    output: {
        path: path.resolve('./public/wp-content/themes/wild-and-without', 'dist'),
        filename: 'bundle.[contenthash].js',
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
        new CleanWebpackPlugin(['./public/wp-content/themes/wild-and-without/dist']),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].css"
        }),
        new WebpackAssetsManifest()
    ]
}
