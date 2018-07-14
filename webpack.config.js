const autoprefixer = require('autoprefixer');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    //(can be omitted) webpack will automaticly see files with this extensions:
    resolve: {
       extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader'},
                    { 
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        } 
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                autoprefixer({
                                    "browsers": [
                                        ">1%",
                                        "last 3 versions"
                                    ]
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader'},
                    { 
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        } 
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                autoprefixer({
                                    "browsers": [
                                        ">1%",
                                        "last 3 versions"
                                    ]
                                })
                            ]
                        }
                    },
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new copyWebpackPlugin([
            {
                from: __dirname + '/src/images/favicon.png',
                to: __dirname + '/dist'
            }
        ])
    ]
}