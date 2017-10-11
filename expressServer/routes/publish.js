 
var express = require('express');
var router = express.Router();

router.get('/:command', function(req,res){

    var command = req.params.command;
	console.log("In Publish....");
	console.log(req);
	res.redirect('/#/home/publicar');
	
	
});

module.exports = router;
