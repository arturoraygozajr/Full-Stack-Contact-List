var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
	res.render('addUser', {title: 'Add User' });
});


router.post('/', function(req, res){
	console.log(req.body)
	fs.readFile('./contacts.json', 'utf8', function (err, data){
		data = JSON.parse(data);
		data.push(req.body);
		data = JSON.stringify(data);
		fs.writeFile('./contacts.json', data, 'utf8', function(err) {
			if (err) {
				res.send(err);
			} else {
				res.send(data);
			}
		})
		console.log('data:', data);
	});
})

module.exports = router;