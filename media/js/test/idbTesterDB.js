if(typeof jQuery!="undefined")
	console.log("Скрипт jQuery загружен");
if(typeof db!="undefined")
{
	console.log("Скрипт db загружен");
	var server;
	db.open({
		 server: 'my-app',
		 version: 1, schema:{
			 people: {
				 key: { keyPath: 'id' , autoIncrement: true }
			 }
		 }
	}).done( function ( s ) {
		server = s  

		server.people.add( {
			firstName: 'Aaron',
			lastName: 'Powell'
		} ).done( function ( item ) {
		console.log(item);
			//item stored
		});

		server.people.query( 'firstName' , 'Aaron' )
			.execute()
			.done( function ( results ) {
					console.log(results);
				//do something with the results
			});
	});
}