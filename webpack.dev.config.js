const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js',
        './src/index.pug',
        './src/styles/main.scss',
        './src/img/arthur_photo.jpg'
    ],
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [
                    'pug-loader'
                    //'html-loader?attributes=false',
                    //'pug-html-loader'
                ]
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/'
                        }
                    }
                ]
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'index.html',
            template: './src/index.pug'
        })
    ],
    devServer: {
        //contentBase: path.resolve(__dirname, './dist'),
        host: '0.0.0.0',
        port: 5000,
        hot: true
    },
    watch: true
};
