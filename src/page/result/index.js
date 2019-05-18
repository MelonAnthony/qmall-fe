/*
* @Author: Qiansion
* @Date:   2019-05-18 11:05:24
* @Last Modified by:   Qiansion
* @Last Modified time: 2019-05-18 11:43:11
*/
require("./index.css");
require("page/common/nav-simple/index.js");
require("page/common/footer/index.js");
var _mm=require('util/mm.js');

$(function(){
	var type  = _mm.getUrlParam('type') || 'default';
	$element = $('.result-title');
	console.log(type);
	if(type == 'default'){
		$element.html('恭喜您,操作成功');
	}else if(type == 'register'){
		$element.html('恭喜您,注册成功');
	}

})