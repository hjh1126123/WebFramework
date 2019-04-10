const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

function resolve(__dir) {
    return path.resolve(__dirname, __dir);
}

module.exports = {
    mode: 'development',
    entry: {
        page1: './src/page1.ts'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            lib: resolve('lib')
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'template.html'),
            hash: true,
            filename: 'index.html',
        }),
        new UglifyJSPlugin()
    ],
    output: {
        publicPath: './',
        path: resolve('dist'),
        filename: 'components/[name].bundle.js',
        chunkFilename: 'lib/[name].chunk.js'
    }
};