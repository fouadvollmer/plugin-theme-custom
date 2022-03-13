const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const config = {
    entry: ["./src/index.js"],
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            }
        ]
    },
    devServer: {
        static: path.join(__dirname, "/")
    }
}

module.exports = (env, argv) => {
    if (argv.mode === 'production') {
        config.output = {
            path: path.resolve(__dirname, "./dist/src/scripts/"),
            filename: '[name].js'
        };

        config.plugins.push(
            new CopyPlugin({
                patterns: [
                    { from: "*.php", to: path.resolve(__dirname, "./dist") },
                    { from: "src/*.php", to: path.resolve(__dirname, "./dist") },
                    { from: "src/assets", to: path.resolve(__dirname, "./dist/src/assets") , noErrorOnMissing: true },
                    { from: "src/includes", to: path.resolve(__dirname, "./dist/src/includes"), noErrorOnMissing: true },
                    { from: "src/modules/**/*[.php|.svg]", to: path.resolve(__dirname, "./dist"), noErrorOnMissing: true }
                ],
            })
        );
    }

    if (argv.mode === 'development') {
        config.output = {
            path: path.resolve(__dirname, "./src/scripts/"),
            filename: '[name].js'
        };
    }

    return config;
}