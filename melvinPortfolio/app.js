var express = require('express'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	// cookieParser = require('cookie-parser'),
	app = express(),
	// routes = require('./routes'),
	routes = require('./routes/index'),
	port = Number(process.env.PORT || 3100);


app.set('view engine', 'ejs' );

app.use(express.static('./public'));
app.use(logger('dev'));
app.use('/', routes);
	

var server = app.listen(port, function(){
	console.log('Go to http://localhost:3100 on your browser');
});

