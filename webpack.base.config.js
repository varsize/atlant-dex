const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const DIR_SRC = path.resolve(__dirname, 'src');
const DIR_BUILD = path.resolve(__dirname, 'dist');
const DIR_ASSETS = path.resolve(DIR_SRC, 'assets');
// const DIR_SOUNDS = path.resolve(DIR_ASSETS, 'sounds');
const DIR_IMAGES = path.resolve(DIR_ASSETS, 'images');
const DIR_ICONS = path.resolve(DIR_ASSETS, 'icons');
const DIR_ICONS_COLORED = path.resolve(DIR_ICONS, 'colored');
// const DIR_FONTS = path.resolve(DIR_ASSETS, 'fonts');
const DIR_PUBLIC = '/';

module.exports = {
  context: DIR_SRC,
  entry: [
    'babel-polyfill',
    './index.js',
  ],
  output: {
    path: DIR_BUILD,
    publicPath: DIR_PUBLIC,
    filename: '[hash].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.css', '.scss', '.svg'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      variables: `${DIR_SRC}/sass/variables.scss`,
    },
    modules: [
      DIR_SRC,
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.vue$/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              failOnError: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            loaders: {
              scss: ExtractTextPlugin.extract({
                use: ['css-loader', 'postcss-loader', 'sass-loader'],
                fallback: 'vue-style-loader',
              }),
            },
          },
        }],
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              failOnError: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
      {
        test: /\.scss$/,
        use: ['css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/images',
          },
        }],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts',
          },
        }],
      },
      {
        test: /\.svg$/,
        exclude: [
          DIR_ICONS_COLORED,
        ],
        use: [
          'svg-sprite-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {removeTitle: true},
                {cleanupEnableBackground: true},
                {cleanupAttrs: true},
                {removeEmptyAttrs: true},
                {removeDimensions: true},
                {removeStyleElement: true},
                {removeAttrs: {attrs: ['fill', 'stroke']}},
              ],
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        include: [
          DIR_ICONS_COLORED,
        ],
        use: 'svg-sprite-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${DIR_SRC}/index.pug`,
    }),
    new ProgressBarPlugin({
      format: 'build [:bar] ' + (':percent') + ' (:elapsed seconds)',
    }),
    new CopyWebpackPlugin([], {
      copyUnmodified: true,
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
      },
      canPrint: true,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
    new ExtractTextPlugin('[hash].main.css'),
    new FaviconsWebpackPlugin({
      logo: `${DIR_IMAGES}/favicon.png`,
      background: '#fff',
      emitStats: false,
      title: 'Atlant DEX',
    }),
  ],
};
