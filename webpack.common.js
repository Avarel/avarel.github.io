const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    entry: {
        index: "./src/index.ts",
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "",
        assetModuleFilename: "./assets/[name][ext][query]"
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets", "resume.pdf"),
                    to: path.resolve(__dirname, "dist", "assets", "resume.pdf")
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: './src/assets/icons/favicon.ico',
            scriptLoading: "defer",
            chunks: ["index"],
        }),
    ].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss", ".css", ".html"]
    },
    module: {
        parser: {
            javascript: {
                url: "relative",
            },
        },
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "ts-loader"
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    // fallback to style-loader in development
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource',
            },
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
};
