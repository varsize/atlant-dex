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
const DIR_ASSETS = 'assets';
const DIR_IMAGES = `${DIR_ASSETS}/images/`;
const DIR_ICONS = `${DIR_ASSETS}/icons/`;
const DIR_ICONS_COLORED = `${DIR_ICONS}/colored/`;
const DIR_FONTS = `${DIR_ASSETS}/fonts/`;
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
      variables: path.resolve(__dirname, 'src/sass/variables.scss'),
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
            outputPath: DIR_IMAGES,
          },
        }],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: DIR_FONTS,
          },
        }],
      },
      {
        test: /\.svg$/,
        exclude: [
          path.resolve(__dirname, `${DIR_SRC}/${DIR_ICONS_COLORED}`),
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
          path.resolve(__dirname, `${DIR_SRC}/${DIR_ICONS_COLORED}`),
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
      logo: `${DIR_IMAGES}favicon.png`,
      background: '#fff',
      emitStats: true,
      title: 'Atlant',
    }),
  ],
};
