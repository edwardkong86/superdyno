const path = require("path");

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.join(__dirname, "src/index.js"),
  output: {
    filename: "bundle.web.js",
    path: path.join(__dirname, "/web/build"),
    library: "superdyno-shared",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          excluded: /(node_modules|example)/,
          options: {
            cacheDirectory: true,
            babelrc: false,
            configFile: false,
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['react-native-web'],
          },
        }
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            esModule: false,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "react-native$": "react-native-web",
    },
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    }
  },
};