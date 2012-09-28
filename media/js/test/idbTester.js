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