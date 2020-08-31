### webpack项目创建（先安装node这个就不说了）
```
1、在一个文件目录下面创建一个文件夹，名字随意（react-stack）
2、在这个文件加下启用终端，然后输入命令初始化一下：npm install -y
3、全局安装两个插件，分别是webpack和webpack-cli：npm install webpack webpack-cli -g
4、再把上面两个插件在项目里面安装一下：npm install webpack webpack-cli -D
5、在根目录下创建一个src文件夹然后在里面在创建一个main.js文件，作为webpack的入口文件
6、在根目录下在创建一个react.config.js文件然后里面配置：配置代码如下：
const path = require("path")
module.exports={
    //入口文件main.js可以配置好多东西所以非常好用
    entry:'./src/main.js'
    //输出文件
    output:{
        path:path.resolve(__dirname,'dist')//这个路径作为打包好的文件储存
        filename:'react.js'//dist文件下的打包的js文件
    }
}
```
### 使用plugins
```
1、先安装html-webpack-plugin插件(它的作用是自动生成一个index.html单页面，并且把打包后.js脚本文件插入进去。)
cnpm install html-webpack-plugin -D 
先引入html-webpack-plugin模块 ：const htmlwebpackplugin=require("html-webpack-plugin")
然后引入const cleanWebpackPlugin=require("clean-webpack-plugin")
 模块下载安装插件也不可以少:cnpm install clean-webpack-plugin -D 
plugins里面的代码如下：
plugins:[
    new htmlwebpackplugin(){
        template:path.resolve(__dirname,'./public/index.html')
        title:'我们'//这个其实就是改变html里面title标签里面的内容的
    }
    new cleanWebpackPlugin()//省的手动清除打包好的dist文件
    new webpack.NamedModulesPlugin(),//用于热更新
    new webpack.HotModuleReplacementPlugin()//用于热更新

]
然后当我们运行npm run build 的时候就会压缩一个包到dist中并且里面的index.html会引入一个js脚本文件
```
### 搭建deserver
```
1、先安装几个插件 全局安装并且项目依赖安装 webpack-dev-server 插件
cnpm webpack-dev-server -g(全局安装) cnpm webpack-dev-server -D(项目依赖)
2、配置devServer代码如下:
devServer:{
    prot:8848;//端口号
    host:10.36.135.43//别人能通过这个地址访问到你的文件
    contentBase:path.resolve(__dirname,'public')//其他用户打开访问的就是public下面的文件
    hot:true(表示热更新已经打开了)
    open:true(表示是否命令执行直接打开一个网页)
}
启动服务器的命令
webpack-dev-server --config xxx.config.js
```
### 热更新
```
先引入webpack：const webpack=require("webpack")
然后在plugins中插入两个方法
new webpack.NamedModulesPlugin(),
new webpack.HotModuleReplacementPlugin()
就好了
```
### 使用css sass
```
1、先安装若干个包
sass-loader css-loader style-loader node-sass这四个包
cnpm install sass-loader css-loader style-loader node-sass -D
安装好之后然后就配置module代码如下
module: {
    rules: [
        {test:/\.(css|scss)$/,use:['style-loader','css-loader','sass-loader']}//必须按照顺序来不能改变
    ]
}
然后在main.js中引入css文件和sass文件就可以成功渲染了

```
### 使用js
```
1、先安装包
cnpm install babel-loader -D
cnpm install @babel/core -D
2、在module模块里面配置代码如下：
module:{
    //这里就是对js代码进行编译转换
    rules:[
        {
            test: /\.js$/,
                exclude: /(node_modules)/,//转换的时候不包括node_modules这个文件
                use: {
                    loader: 'babel-loader',
            }
        }
    ]
}

```
### 使用EsLint
```
作用：用来检测代码，规范js代码，保持特定的风格，便与协同开发。
1、先安装包：
cnpm install eslint-loader -D
cnpm install eslint -D
2、在module中配置，代码如下：
module:{
    rules:[
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            enforce:'pre'//前置检测
        }
    ]
}
3、然后新建一个名为.eslintrc.json的文件并且配置，代码如下：
{
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        // "semi": "error"//必须加分号不然会报错。
        //这里面就是一些规范，规则。
    }
}

```
### 区分开发环境与生产环境
```
1、安装插件：
cnpm install cross-env -D
2、在package.json下面配置命令，代码如下：
"scripts": {
  "build": "cross-env NODE_ENV=production webpack --config react.config.js",
  "serve": "cross-env NODE_ENV=development webpack-dev-server --config react.config.js",
  "start": "npm run serve"
},
3、然后react-config.js就要进行大翻新了
先定义一个env：const env = process.env.NODE_ENV
然后根据env是production还是development来配置我们的webpack开发，接下来自己思考：如果是在开发环境中要用到的插件或者模块就归入开发环境那一块，例如：热更新，eslint前置检测等，否则那么久归入上产环境那一块。
启动开发环境命令: npm run build
启动生产环境命令：npm start
```
### react安装
```
1、安装模块：
cnpm install react react-dom -S
2、在src目录下新建一个App.js然后在里面配置，封装react组件，代码如下：
import React from 'react'//引入react模块
export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            //用jsx语法写的对象。
            <div className='hehe'>
                <h1>hello react</h1>
            </div>
        )
    }
}
3、把组件渲染到真实的DOM节点上，在main.js中配置，代码如下：
import React from "react"//引入react模块
import ReactDOM from "react-dom"//引入react-dom模块
import @/assets/css/common.scss//引入scss样式用于渲染页面
import App from "./App"//引入react组件
ReactDOM.render(<App />,document.getElementById('root'))(index.html中div的id必须为root才有用)
4、安装两个插件
cnpm install @babel/preset-react -D  支持jsx语法的babel插件
cnpm install @babel/preset-env -D  支持ES6中较新的语法
5、在项目根目录下创建一个babel的配置文件，命名为.babel.json,里面配置如下：
{
  "presets": [
    ["@babel/preset-react"],
    ["@babel/preset-env",{"useBuiltIns": "entry"}]
  ]
}
注：不管任何配置更改之后都要重新启动项目。
```