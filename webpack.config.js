/*
* @Author: Qiansion
* @Date:   2019-05-15 12:00:07
* @Last Modified by:   Qiansion
* @Last Modified time: 2019-05-18 02:17:39
*/
//进度：下一节：4.12
const path 				= require('path');
const webpack 			= require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 环境变量配置，dev / online
var WEBPACK_ENV         = process.env.WEBPACK_ENV || 'dev';

//获取html-webpack-plugin的页面
var getHtmlConfig = function(name){
    return {
        template    :   './src/view/'+name+'.html',
        filename    :   'view/'+name+'.html',
        inject      :   true,
        hash        :   true,
        chunks      :   ['common',name]
    };
}
var config = {
	entry : {
        //webpack-dev-server --inline --port 8088
		'common'  : ['./src/page/common/index.js'],
		'index'   : ['./src/page/index/index.js'],
		'login'   : ['./src/page/login/index.js']
 	},
	output : {
		path : path.resolve(__dirname,'./dist/'),
        publicPath : '/dist',
		filename : 'js/[name].js'
	},
    resolve:{
        alias : {
            node_modules    :   __dirname+'/node_modules',
            util            :   __dirname+'/src/util',
            page            :   __dirname+'/src/page',
            service         :   __dirname+'/src/service',
            image           :   __dirname+'/src/image',
        }
    },
	module:{ //我写一个module
        //定义规则
        rules : [
        	{
        		test : /\.css$/,
        		use : ExtractTextPlugin.extract({
        			fallback : 'style-loader',
        			use : 'css-loader'
        		})
        	},
            {
                test: /\.(gif|png|jpg|woff|svg|eot|ttf|woff2)(\?.*)?$/,
                loader: 'url-loader?limit=100&name=resource/[name].[ext]'
            },
            {
                 test: /\.string$/, 
                 loader: 'html-loader'
            }
        ],
        
    },
	externals : {
		'jquery':'window.jQuery'
	},
	plugins:[
    //把css单独打包
	new ExtractTextPlugin("css/[name].css"),
    //html模板处理
    new HtmlWebpackPlugin(getHtmlConfig('index')),
    new HtmlWebpackPlugin(getHtmlConfig('login')),
    //独立通用模块
    new webpack.optimize.CommonsChunkPlugin({
      name : 'common',//这里的'common'回去找上面入口处引入的common
      filename : 'js/base.js'
    })
  ]
}

if('dev' === WEBPACK_ENV){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}

module.exports = config;
