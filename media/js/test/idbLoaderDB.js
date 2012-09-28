yepnope({
	load:[ 
	"http://pawelitel.github.com/CDN/javascripts/min/jquery-1.7.2.min.js",
	"http://pawelitel.github.com/CDN/javascripts/min/db.min.js"
		 ],
	charset: "UTF-8",
	callback: function (url, result, key)
	{
		if(key==0)
		if(typeof jQuery!="undefined")
			console.log("Скрипт jQuery загружен");
		if(key==1)
		if(typeof db!="undefined")
			console.log("Скрипт db загружен");
	}
});