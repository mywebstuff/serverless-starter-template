const slsw = require('serverless-webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  // Generate sourcemaps for proper error messages
  devtool: 'source-map',
  // Since 'aws-sdk' is not compatible with webpack,
  // we exclude all node dependencies
  externals: [nodeExternals()],
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  optimization: {
    // We no not want to minimize our code.
    minimize: false,
  },
  performance: {
    // Turn off size warnings for entry points
    hints: false,
  },
  // Run babel on all .js files and skip those in node_modules
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/,
      },

      /* Comment out the followings if you want to import pug files like this:
       * @example
       * import someTemplate from './path/to/some-template.pug'
       */
      /*
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        include: __dirname,
        exclude: /node_modules/,
      },
      */

      /* Comment out the followings if you want to import image files like this:
       * @example
       * import myLogo from './assets/logo.png'
       */
      /*
      {
        test: /\.(png|jpg|gif)$/,
        include: __dirname,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      */
    ],
  },
}
