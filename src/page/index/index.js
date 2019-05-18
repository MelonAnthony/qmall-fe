/*
* @Author: Anthony
* @Date:   2019-05-14 00:32:28
* @Last Modified by:   Qiansion
* @Last Modified time: 2019-05-18 10:57:20
*/
'use strict';
require("page/common/header/index.js");
require("page/common/nav/index.js");
require("page/common/nav-simple/index.js");
var navSide = require("page/common/nav-side/index.js");
require("page/common/footer/index.js");
var _mm=require('util/mm.js');

navSide.init({
	name:'user-center'
});
// _mm.request({
// 	url:'http://localhost:8088/product/list.do?keyword=1',
// 	success:function(res){
// 		console.log(res);
// 	},
// 	error:function(err){
// 		console.log(res);
// 	}
// })

// console.log(_mm.getUrlParam('test'));

// var html = '<div>{{data}}</div>';
// var data = {
// 	data:123
// }
// console.log(_mm.renderHtml(html,data));
