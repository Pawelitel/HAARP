function load (w,href)
{
	var scriptYN = w.document.createElement("script");
	scriptYN.type = "text/javascript";
	scriptYN.async = false;
	scriptYN.src = href;
	w.document.getElementsByTagName('head')[0].appendChild(scriptYN);
}
load(window,'http://pawelitel.github.com/CDN/javascripts/min/jquery-1.8.2.min.js');
load(window,'http://pawelitel.github.com/CDN/javascripts/min/breeze.min.js');
load(window,'http://pawelitel.github.com/CDN/javascripts/min/simpleCookie.min.js');

