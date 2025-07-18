// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require("webpack");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
    entry: [
        path.resolve(__dirname, "src/index.ts"),
    ],

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist/'),
    },

    devtool: 'source-map',

    devServer: {
        port: 3000,
        writeToDisk: true,
        publicPath: 'dist/',
        contentBase: path.resolve(__dirname, 'dist'),
    },

    resolve: {
        extensions: ['.ts', '.js'],
        symlinks: true,
    },

    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        "configFile": "../tsconfig.json",
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                ],
            },
            {
                test: /\.svg$/,
                type: "asset/inline" 
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            env: JSON.stringify(process.env)
        }),
    ]
};
