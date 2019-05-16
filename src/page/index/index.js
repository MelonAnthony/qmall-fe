/*
* @Author: Anthony
* @Date:   2019-05-14 00:32:28
* @Last Modified by:   Qiansion
* @Last Modified time: 2019-05-16 23:32:17
*/
'use strict';
var _mm=require('util/mm.js');
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

var html = '<div>{{data}}</div>';
var data = {
	data:123
}
console.log(_mm.renderHtml(html,data));
