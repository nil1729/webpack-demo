## Webpack Demo

A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows for loading parts of the application on demand. Through "loaders", modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON, Coffeescript, LESS, ... and your custom stuff. ([Webpack](https://github.com/webpack/webpack))

### Set up Working Directory and Configuring Webpack

1. Initialize an empty node project via
   ```
   $  npm init
   ```
2. Install **webpack**, **Webpack-cli** and **webpack-dev-server**
   ```
   $   npm install --save-dev webpack webpack-cli webpack-dev-server
   ```
3. Directory Structure

   ```
        |-- webpack-demo
            |-- node_modules
            |-- .gitignore
            |-- src
            |   |-- assets
            |   |   |-- image.png
            |   |-- js
            |   |   |-- index.js
            |   |-- style
            |   |   |-- main.css
            |   |-- template
            |   |   |-- index.html
            |-- webpack.config.js
   ```

4. Setup webpack configuration file

   ```
        const path = require('path');

        module.exports = {
            entry: { main: './src/js/index.js', },
            output: {
                path: path.resolve(__dirname, 'build'),
                filename: 'js/[name].[contenthash].min.js',
                assetModuleFilename: 'images/[name].[hash][ext][query]',
            },
            module: {
                rules: [
                    {
                        test: /\.html$/i,
                        use: {
                            loader: 'html-loader',
                        },
                    },
                    {
                        test: /\.(png|jpe?g)$/i,
                        type: 'asset/resource',
                    },
                    {
                        test: /\.css$/i,
                        use: ['style-loader', 'css-loader'],
                    },
                ],
            },
            devServer: {
                compress: true,
                port: 8080,
            },
        }
   ```

5. Configure **package.json**
   ```
        ...
        "private": true,
        "scripts": {
            "start": "webpack serve --open",
        },
        ...
   ```
6. Run the Script
   ```
   $   npm start   // it will open a window on default browser with index.html
   ```

### Helpful Links

- [Webpack Website](https://webpack.js.org/)
- [Initial Setup](https://webpack.js.org/concepts/)
- [Loaders](https://webpack.js.org/concepts/loaders/)
  - [Style Loader](https://webpack.js.org/loaders/style-loader/)
  - [CSS Loader](https://webpack.js.org/loaders/css-loader/)
  - [SCSS Loader](https://webpack.js.org/loaders/sass-loader/)
  - [HTML Loader](https://webpack.js.org/loaders/html-loader/)
- [Asset Module (>=v5)](https://webpack.js.org/guides/asset-modules/)
- [Dev Server Setup](https://github.com/webpack/webpack-dev-server)
