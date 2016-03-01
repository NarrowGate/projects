var express = require('express'),
	router = express.Router(),
   	data = require('../data.json')
	;

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

	router.get('/contact-form', function(req, res) {
		var name = req.query.name;
		res.render('contact_thanks', {
			name: name
		});
	});

	router.get('/portfolio', function(req,res) {
		// var data = require('__dirname/data.json');
		res.render('portfolio', 
			{
				title: "dat",
				data: data
			}
		)
	})



module.exports = router;