const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader?indentedSyntax'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]?[hash]",
                    outputPath: 'fonts/',
                    publicPath: 'fonts/'
                },
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    outputPath: 'images/',
                    publicPath: 'images/'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(
            ['dist/*'],
            {
                exclude: ['.gitkeep', 'lib.min.js']
            }
        )
    ]
};