var express = require('express'),
	router = express.Router();

	router.get('/', function(req, res) {
		res.render('index', {
			title: 'Melvin Home'
		})
	});

	router.get('/about', function(req, res) {
		res.render('default', {
			title: 'About Melvin'
		})
	});

	router.get('/contact', function(req, res) {
		res.render('contact', {
			title: 'Contact'
		})
	});


module.exports = router;