const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsWebpack = require('optimize-css-assets-webpack-plugin');

const config = {
    entry: {
        app: "./src/app.jsx"
    },

    output: {
        path: path.join(__dirname, "dist"),
        filename: '[name][hash].js',
        chunkFilename: '[name][hash].js',
        publicPath: '/'
    },

    // Dev server
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        historyApiFallback: {
            index: '/index.html'
        },
    }, 

    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', '.sass']
    },

    module: {
        rules: [
            {
                // To load jsx and js files.
                test: /\.(jsx|js)$/,
                exclude: /node_modules/, 
                use:'babel-loader'
            },
            {
                // To load img files.
                test: /\.(png|gif|svg|jpg|pdf)$/,
                use: 'file-loader'
            },
            {
                // To load video files.
                test: /\.(mp4|flv|webm)$/,
                use: 'file-loader'
            },
            {
                // To load fonts.
                test: /\.(woff|ttf|otf|eot)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options:{
                    name: '[path][name].[ext]'
                }
            },
            {
                // To load css
                test:/\.css$/, 
                use: ['style-loader', ExtractCssChunksPlugin.loader,'css-loader', 'postcss-loader']
            },
            {
                // To comiple sass and css files.
                test: /\.(sass|scss)$/,
                use: ['style-loader', ExtractCssChunksPlugin.loader, 'css-loader', 'postcss-loader',  'resolve-url-loader', 'sass-loader']
            }
        ]
    },

    plugins: [
        // this will igonre locales and moment js
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

        // To clean dist folder before every build
        new CleanWebpackPlugin(['dist'], {}),

        // Make chunks of css files.
        new ExtractCssChunksPlugin({
            filename:"[name][hash].css",
            chunkFilename:"[name][id][hash].css"
        }),

        // To insert favicons.
        new WebappWebpackPlugin({
            logo: './assets/favicons/colossal.png',
            prefix: './',
            inject: 'force'
        }),

        // To create html file.
        new HtmlWebpackPlugin({
            chunks: ["app"],
            title : "Colossal",
            filename : "index.html",
            template : "assets/templates/app.html",
            minify : {
                removeComments : true,
                collapseWhitespace : true,
                conservativeCollapse : true,

            },
        }),

        // Limit the chunck count.
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ],

    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    output: {
                        comments: false,
                        ascii_only: true
                    },
                    compress: {
                        comparisons: false
                    }
                }
            }),
            new OptimizeCssAssetsWebpack({
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    presets: ['advance', {discardComments: {removeAll: true}}]
                } 
            })
        ],
		splitChunks: {
            chunks: "async",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        },
		occurrenceOrder: true // To keep filename consistent between different modes (for example building only)
    }   
}

module.exports = config;