const path = require("path");

module.exports = {
    context: __dirname,
    entry: "./src/modules/app.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts"],
    },
};
