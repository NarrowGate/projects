exports.index = function(req, res) {
		res.render('default', {
			title: 'Melvin Home',

		})
	};

exports.about = function(req, res) {
		res.render('default', {
			title: 'About Melvin'
		})
	};