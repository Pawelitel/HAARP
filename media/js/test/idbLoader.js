yepnope({
	load:[ 
	"http://pawelitel.github.com/CDN/javascripts/min/jquery-1.7.2.min.js",
	"http://pawelitel.github.com/CDN/javascripts/min/indexeddb.shim.min.js",
	"http://pawelitel.github.com/CDN/javascripts/min/Linq2IndexedDB.min.js"
		 ],
	charset: "UTF-8",
	callback: function (url, result, key)
	{
		if(key==0)
		if(typeof jQuery!="undefined")
			console.log("Скрипт jQuery загружен");
		if(key==1)
		if(typeof idbModules!="undefined")
			console.log("Скрипт indexeddb.shim загружен");
		if(key==2)
		if(typeof linq2indexedDB!="undefined")
			console.log("Скрипт Linq2IndexedDB загружен");
	}
});