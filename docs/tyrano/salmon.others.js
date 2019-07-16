window.UNIX = new Unix();
window.tyranoAPI = new TyranoAPI();
function Unix () {
	this.getTime = function () {
		return Math.floor(new Date().getTime()/1000);
	};
	this.getParsedTime = function () {
		return this.parse(this.getTime());
	};
	this.parse = function (intTime, type) {
		intTime = parseInt(intTime);
		var d, year, month, day, hour, min, sec, yobi;
		if (! type) type = 0;
		switch (type) {
		case 0:
			d = new Date(intTime * 1000);
			year	= d.getFullYear();
			month = d.getMonth() + 1;
			day	 = d.getDate();
			hour	= d.getHours();
			min	 = ('0' + d.getMinutes()).slice(-2);
			sec	 = ('0' + d.getSeconds()).slice(-2);
			yobi	= ["日", "月", "火", "水", "木", "金", "土"][d.getDay()];
			yobi = "<span class='rotation_yobi'>（" + yobi + "）</span>";
			return(month + '/' + day + yobi + hour + ':' + min);
		case 1:
			d = new Date(intTime * 1000);
			day	 = d.getDate();
			hour	= d.getHours() + (day - 1) * 24;
			return hour + "時間";
		case 2:
			d = new Date(intTime * 1000);
			day	 = d.getDate();
			hour	= d.getHours() + (day - 1) * 24;
			min	 = d.getMinutes();
			return hour + "時間" + min + "分";
		}
	};
}
function TyranoAPI () {
	this.jump = function (storage, target, time) {
		setTimeout(function () {
			TYRANO.kag.ftag.startTag("jump", {
				storage: storage,
				target: target
			});
		}, time || 0);
	};
	return this;
}
function parseVersion (version) {
	var v = ("000000" + version).slice(-6);
	var a = parseInt(v[0] + v[1]);
	var b = parseInt(v[2] + v[3]);
	var c = parseInt(v[4] + v[5]);
	return "Ver." + a + "." + b + "." +	c;
}
function fixFitBaseSize () {
	this.timer1 = -1;
	this.timer2 = -1;
	var that = this;
	var origin = TYRANO.base.fitBaseSize;
	TYRANO.base.fitBaseSize = function () {
		origin.apply(TYRANO.kag, [TYRANO.kag.config.scWidth, TYRANO.kag.config.scHeight]);
		clearTimeout(that.timer1);
		clearTimeout(that.timer2);
		that.timer1 = setTimeout(function(){
			origin.apply(TYRANO.kag, [TYRANO.kag.config.scWidth, TYRANO.kag.config.scHeight]);
		}, 500);
		that.timer2 = setTimeout(function(){
			origin.apply(TYRANO.kag, [TYRANO.kag.config.scWidth, TYRANO.kag.config.scHeight]);
		}, 1000);
	};
}
function getUrlQueries() {
	var queryStr = window.location.search.slice(1);
			queries = {};
	if (!queryStr) {
		return queries;
	}
	queryStr.split('&').forEach(function(queryStr) {
		var queryArr = queryStr.split('=');
		if (queryArr[1]) {
			queries[queryArr[0]] = queryArr[1];
		}
		else {
			queries[queryArr[0]] = '';
		}
	});
	return queries;
}
function addFixButton () {
	var $wrapper = $("<div></div>");
	$wrapper.addClass("fixlayer");
	$wrapper.css({
		"position": "absolute",
		"width": "100%",
		"height": "120px",
		"top": "840px",
		"left": "0px",
		"z-index": "99999999"
	});
	for (var i = 0; i < 4; i++) {
		var x = 160 * i;
		var y = 0;
		var name = "panel_" + (i + 1);
		var $img = $("<img>");
		$img.addClass("panel " + name);
		$img.attr("id", name);
		$img.attr("src", "./data/image/" + name + ".png");
		$img.css({
			"width": "160px",
			"left": x + "px",
			"top": y + "px"
		});
		(function($obj, num){
			$obj.click(function(){
				var stack_pm = TYRANO.kag.getStack("call");
				if (stack_pm != null) {
					return false;
				} else {
					TYRANO.kag.ftag.startTag("call", {
						storage: "learn.ks",
						target: "Panel_" + num,
						auto_next: "stop"
					});
				}
			});
		}($img, i + 1));
		$wrapper.append($img);
	}
	$("#tyrano_base").append($wrapper);
}
function changeCurrentFixButton (num) {
	var id = "#panel_" + num;
	$(".panel").removeClass("panel_now").filter(id).addClass("panel_now");
}