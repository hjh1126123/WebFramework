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
        home: './page/home.ts',
        user: './page/user.ts'
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
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'template.html'),
            hash: true,
            filename: 'home.html',
            chunks: ['home'],
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'template.html'),
            hash: true,
            filename: 'user.html',
            chunks: ['user'],
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin(),        
        new UglifyJSPlugin({
            cache: true,
            extractComments: true,
            sourceMap: true
        })
    ],
    output: {
        publicPath: './',
        path: resolve('dist'),
        filename: 'components/[name].bundle.js',
        chunkFilename: 'lib/[name].chunk.js'
    }
};