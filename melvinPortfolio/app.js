var express = require('express'),
	app = express(),
	routes = require('./routes'),
/*	logger = require('morgan'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),*/
	port = Number(process.env.PORT || 3100);


app.use(express.static('./public'));
app.set('view engine', 'ejs' );


app.get('/', routes.index);
app.get('/about', routes.about);
app.get('*', function(req, res) {
	res.send('Bad Request')
});
	




var server = app.listen(port, function(){
	console.log('Go to http://localhost:3100 on your browser');
});

