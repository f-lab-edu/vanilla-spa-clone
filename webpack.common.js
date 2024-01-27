const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "web",
  entry: path.resolve(__dirname, "src/index.js"),
  resolve: {
    extensions: [".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@public": path.resolve(__dirname, "public"),
      "@assets": path.resolve(__dirname, "public/assets"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "public/index.html"),
      favicon: path.resolve(__dirname, "public/assets/favicon.ico"),
    }),
  ],
};
