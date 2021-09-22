
/* JACK VOLONTE */

var express = require('express');
var router = express.Router();

/* GET orders listing. */
router.get('/', function(req, res, next) {
	
	/*JSON array object*/
		var arrayOfOrders = [{
		"id": 0,
		"topping": "cherry",
		"quantity": "2"
		}, {
		"id": 1,
		"topping": "plain",
		"quantity": "6"
		}, {
		"id": 2,
		"topping": "chocolate",
		"quantity": "3"
		}];
	
	//send JSON object to /orders route
	res.send(arrayOfOrders);
});

module.exports = router;
