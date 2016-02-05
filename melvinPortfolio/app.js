var express = require('express'),
	app = express();

	app.set('view engine', 'ejs' )

	app.get('/', function(req, res) {
		res.render('default', {
			title: 'Melvin Home',

		})
	});

	app.get('/melvin', function(req, res) {
		res.send('PLanet of the ape Melvin')
	});

	app.get('/who/:name?', function(req, res) {
		var name = req.params.name;
		res.send('My name is ' + name + ".")
	});
	app.get('*', function(req, res) {
		res.send('Bad Request')
	});

var server = app.listen(3100, function(){
	console.log('Go to http://localhost:3100 on your browser');
});

