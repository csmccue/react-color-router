module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: [
    './src/index.js',
  ],
  output: {
    publicPath: '/',
    filename: 'app.bundle.js',
    path: __dirname + '/dist',
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },  
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader', // put css in style tag
          { loader: 'css-loader' }, // we can now understand css
        ],
      },
    ],
  },
};