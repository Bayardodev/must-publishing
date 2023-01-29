const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
        publicPath: "/",
        clean: true,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env"]
                    }
                },
            
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@static': path.resolve(__dirname, 'public/static/'),
            '@components': path.resolve(__dirname, 'src/components'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html"
        }),
    ]
}