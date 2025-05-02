import path from 'path';

import type webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

import 'webpack-dev-server';

const DEV_SERVER_PORT = 8080;

export default {
    entry: path.resolve(__dirname, '/src/index.tsx'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: DEV_SERVER_PORT,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            scriptLoading: 'defer',
        }),
    ],
} satisfies webpack.Configuration;
