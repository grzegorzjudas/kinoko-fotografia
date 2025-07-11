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
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: DEV_SERVER_PORT,
        historyApiFallback: true,
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
                resourceQuery: { not: [/raw/] },
                generator: {
                    filename: 'static/images/[hash][ext][query]',
                },
            },
            {
                test: /\.svg$/,
                resourceQuery: /raw/,
                type: 'asset/source',
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/fonts/[hash][ext][query]',
                },
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
