function load (w,href)
{
	var scriptYN = w.document.createElement("script");
	scriptYN.type = "text/javascript";
	scriptYN.async = false;
	scriptYN.src = href;
	w.document.getElementsByTagName('head')[0].appendChild(scriptYN);
}

load(window,"http://pawelitel.github.com/CDN/javascripts/min/jquery-1.8.2.min.js");
load(window,"http://pawelitel.github.com/CDN/javascripts/min/indexeddb.shim.min.js");
load(window,"http://pawelitel.github.com/CDN/javascripts/min/Linq2IndexedDB.min.js");

if(typeof jQuery!="undefined")
	console.log("Скрипт jQuery загружен");
if(typeof idbModules!="undefined")
	console.log("Скрипт indexeddb.shim загружен");
if(typeof linq2indexedDB!="undefined")
{
	console.log("Скрипт Linq2IndexedDB загружен");
	var db = window.linq2indexedDB();
	db.linq.from("myObjectStore").insert({name: "test", firstname: "firstname"}).done
	(
		function(a,b){console.log("done");console.log(a);console.log(b);}
	);
	db.linq.from("myObjectStore").where("name").equals("test").select().done(function(a,b){console.log("done");console.log(a);console.log(b);});
}