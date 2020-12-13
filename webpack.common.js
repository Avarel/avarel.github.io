const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.ts",
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "",
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "typed.js": "Typed"
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
            scriptLoading: "defer",
            chunks: ["index"],
        }),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss", ".css", ".pug", ".html"]
    },
    module: {
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
                test: /\.css$/,
                use: [
                    // fallback to style-loader in development
                    process.env.NODE_ENV !== 'production'
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    "css-loader"
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    // fallback to style-loader in development
                    process.env.NODE_ENV !== 'production'
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
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