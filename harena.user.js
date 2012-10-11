// ==UserScript==
// @name           harena16mb
// @namespace      harena16mb
// @description    harena16mb
// @include			http://*.hockeyarena.net/ru/*
// @include			http://hockeyarena.net/ru/*
// @match			http://*.hockeyarena.net/ru/*
// @match			http://hockeyarena.net/ru/*
// @copyright      Pawelitel
// @version        1.0.1
// @license        GNU
// ==/UserScript==

try {
    var w;
    if (typeof unsafeWindow != undefined) {
        w = unsafeWindow
    } else {
        w = window
    }
    if (w.self != w.top) {
        return
    }
    if ((w.document.location.href.indexOf("public_league_standings.php") > 0) || (w.document.location.href.indexOf("smenu=mliga") > 0)) {
        var script = w.document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.innerHTML = "function harena16mb(){var href = 'http://harena.16mb.com/?';var array = document.getElementsByTagName('table')[1].getElementsByTagName('a');for (var i = 0; i < array.length-1; i++){href+='t'+(i+1)+'='+array[i].href.split('team_id=')[1]+'&';}href+='t'+(i+1)+'='+array[array.length-1].href.split('team_id=')[1];document.location = href;return;};";
        w.document.getElementsByTagName('head')[0].appendChild(script);
		var button = w.document.createElement("input");
        button.setAttribute("type", "button");
        button.setAttribute("value", "harena.16mb.com");
        button.setAttribute("onClick", "harena16mb()");
        w.document.getElementsByTagName("table")[0].getElementsByTagName("td")[0].appendChild(button);
    }
} catch (e) {
    console.error(e)
}
return;
