var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('./contacts.json', 'utf8', function (err, data){
		data = JSON.parse(data);
  res.render('index', {data: data , title: "Users"});
	});
});

module.exports = router;
