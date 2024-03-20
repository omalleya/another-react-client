var path = require('path');

module.exports = {
	  mode: 'development',
	  entry: './src/app.tsx',
	  performance: {
		      hints: false,
		    },
	  output: {
		      filename: 'bundle.js',
		      path: path.resolve(__dirname, './dist')
		    },
	  performance: { hints: false },
	  devServer: {
      static: {
        directory: path.join(__dirname, './'),
        serveIndex: true
      },
      compress: true,
      historyApiFallback: true,
    },
	  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
