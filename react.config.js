const path = require("path");//用到绝对路径时通过path.resolve可以得到绝对路径
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const miniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const env=process.env.NODE_ENV
//webpack生产环境的配置
const config={
    //入口文件，指定本地服务器运行或者webpack打包程序的入口文件
    entry: path.resolve(__dirname,'./src/main.js'),
    //出口文件:打包完成之后文件放在那里(dist)
    output: {
        filename: '[name].[hash].js',//打包之后dist 下面生成的js文件
        path: path.resolve(__dirname, 'dist')
    },
    //拓展功能(可以引入一系列的插件)
    plugins: [
        //这个插件的作用就是自动生成一个HTML单页面，并且将打包好的js脚本插入其中
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, './public/index.html'),
                title: '我们'
            } 
        ),
        //每次重新打包webpack的时候不用删除dist包，它会自己删除
        new CleanWebpackPlugin(),
    ],
    //module：用于对代码中各种文件进行编译转换浏览器能够识别js和css，scss文件
    module:{
        rules:[
            //对js代码进行编译转换
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            //对css和scss代码进行编译转换
            { 
                test: /\.(css|scss)$/, 
                use: ['style-loader', 'css-loader', 'sass-loader'] 
            },   
        ]
    },
    //resolve解析
    resolve:{
        //创建import或者require的别名，以确保引入模块更简单。
        alias:{
            //使用@代表./src
            "@":path.resolve(__dirname,'./src')
        },
        //自动解析的扩展能在用户不带后缀下默认使用下列定义的后缀
        extensions:[".js",".jsx",".json"]
    }
}
//webpack开发环境配置(就是在自己电脑上写的时候需要的环境)
if(env==='development'){
    //用于热更新的两个插件
    config.plugins.push(new webpack.NamedModulesPlugin())
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
    config.devServer= {
        port: '8848',//端口号
        open: true,//程序运行时是否直接打开一个网页
        host: '10.36.135.43',//域名
        contentBase: path.resolve(__dirname, 'public'),
        hot: true,//是否热更新
        //eslint检测时当有错误就会在浏览器上出现一层透明层。
        overlay:{
            errors:true
        },
        proxy: {
            "/api": {
              target: "http://localhost:3000",//服务端端口号。如果需要更改可以在node-full-api中的WWW下更改
              secure: false
            }
          }
    }
    //当代码报错时，可以帮我定位到源代码的位置
    config.devtool='inline-source-map'
    config.module.rules.push(
        //eslint用于js代码检测是否出错
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            enforce:'pre'//前置检测
        }
    )
}
module.exports = config
// module.exports = {
    // entry: path.resolve(__dirname,'./src/main.js'),
    // //出口文件
    // output: {
    //     filename: 'react.js',
    //     path: path.resolve(__dirname, 'dist')
    // },
    // plugins: [
    //     new HtmlWebpackPlugin(
    //         {
    //             template: path.resolve(__dirname, './public/index.html'),
    //             title: '我们'
    //         } 
    //     ),
    //     new CleanWebpackPlugin(),
    //     //用于热更新
    //     new webpack.NamedModulesPlugin(),
    //     new webpack.HotModuleReplacementPlugin(),
    //     new miniCssExtractPlugin(),
    // ],
    // devServer: {
    //     port: 8848,
    //     open: true,
    //     host: '10.36.135.43',
    //     contentBase: path.resolve(__dirname, 'public'),
    //     hot: true,
    //     overlay:{
    //         errors:true
    //     }
    // },
    // module: {
        // rules: [
            // { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            // {
            //     test: /\.css$/,
            //     use: [miniCssExtractPlugin.loader, 'css-loader'],
            // },
            // {
            //     test: /\.js$/,
            //     exclude: /(node_modules)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader',
            // },
        // ]
    // }
// };