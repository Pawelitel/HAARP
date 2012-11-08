// ==UserScript==
// @run-at		document-end
// @nocompat
// @name		Loader
// @namespace	HAARP
// @description	Hockey Arena Analytical Research Program. Юзерскрипт для hockeyarena.net
// @version		0.3.2
// @updateURL   http://pawelitel.github.com/HAARP/haarp.meta.js
// @downloadURL	http://pawelitel.github.com/HAARP/haarp.user.js
// @author		Pawelitel
// @copyright   Pawelitel
// @license     MIT
// @include		http://*.hockeyarena.net/ru/*
// @include		http://hockeyarena.net/ru/*
// @match		http://*.hockeyarena.net/ru/*
// @match		http://hockeyarena.net/ru/*
// ==/UserScript==

var w; //window
var u = typeof w; //undefined
if (typeof unsafeWindow != u) //для мозиллы
w = unsafeWindow
else w = window;

function code() {
	clearInterval(_timer);
	//путь к готовым феймворкам и библиотекам
	var CdnHttp = "http://pawelitel.github.com/CDN";
	//путь к скриптам HAARP
	var HaarpHttp = "http://pawelitel.github.com/HAARP";
	try {
		if (w.self != w.top) return; //не запускать во фреймах
		if (u == w.document.getElementsByTagName("head")[0]) //для страниц без скриптов
		{
			if (u == w.document.getElementsByTagName("html")[0]) {
				var sc = w.document.createElement("html");
				document.appendChild(sc)
			}
			var sc = w.document.createElement("head"),
				elm = w.document.getElementsByTagName("html")[0];
			elm.appendChild(sc)
		};
		//объявление путей
		var script = w.document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.innerHTML = 'var CdnHttp = "' + CdnHttp + '";var HaarpHttp = "' + HaarpHttp + '";';
		w.document.getElementsByTagName('head')[0].appendChild(script);
		//загрузка плагина
		var scriptLoader = w.document.createElement("script");
		scriptLoader.type = "text/javascript";
		scriptLoader.async = false;
		scriptLoader.src = HaarpHttp + '/media/js/loader.js';
		w.document.getElementsByTagName('head')[0].appendChild(scriptLoader);

	} catch (e) {
		console.error(e)
	}
}
// скрипт должен грузится после прорисовки страницы в любом браузере
var _timer = setInterval(code, 20);