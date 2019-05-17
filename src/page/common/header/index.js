/*
* @Author: Qiansion
* @Date:   2019-05-18 00:26:23
* @Last Modified by:   Qiansion
* @Last Modified time: 2019-05-18 01:06:10
*/
require("./index.css");

var _mm = require('util/mm.js');
//通用页面头部
var header = {
	init : function(){
		this.bindEvent();
	},
	onLoad : function(){
		var keyword = _mm.getUrlParam('keyword');
		//keyword存在,则回填输入框
		if(keyword){
			$('#search-input').val(keyword);
		};
	},
	bindEvent : function(){
		var _this = this;
		//点击搜索按钮以后,点击提交
		$('#search-btn').click(function(){
			_this.searchSubmit();
		})
		//输入回车后,做搜索提交
		$('#search-input').keyup(function(e){
			//13是回车的keyCode
			if(e.keyCode === 13){
				_this.searchSubmit();	
			}
		});
	},
	searchSubmit : function(){
		var keyword = $.trim($('#search-input').val());
		//如果提交的时候有keyword,正常跳转到list页
		if(keyword){
			window.location.href = './list.html?keyword='+keyword;
		}else{
			_mm.goHome();
		}
	}
};

header.init();