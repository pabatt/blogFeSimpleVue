const { join, resolve } = require('path');
const { createReadStream } = require('fs');

const webpack = require('webpack');

const HtmlPlugin = require('html-webpack-plugin');
const HtmlTemplatePlugin = require('html-webpack-template');
const VuePlugin = require('vue-loader/lib/plugin');

module.exports = {
    context: __dirname,

    entry: join( __dirname, 'src/index.js' ),

    output: join( __dirname, 'public/bundle.js' ),

    resolve: {
        modules: [
            resolve('./src/'),
            resolve('./node_modules'),
        ],
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },

            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },

        ],
    },

    plugins: [
        new VuePlugin(),

        new HtmlPlugin({
            filename: 'index.html',
            template: HtmlTemplatePlugin,
            inject: false,
            mobile: true,
            appMountId: 'app',
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `"${process.env.NODE_ENV}"`,
            },
        }),
    ],

    devServer: {
        contentBase: './public/',
        hot: true,
        port: 9000,
        setup(app) {
            app.get('/api/tiles', function(req, res)  {
                res.writeHead(200, { 'Content-Type' : 'application/json' });
                createReadStream(join(process.cwd(), 'api/tiles.json'), { encoding: 'utf-8' })
                    .pipe(res);
            });
        },
    },
};
