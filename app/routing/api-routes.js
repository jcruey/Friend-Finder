var friendsData 		= require('../data/friends.js');
var path 			= require('path');
var bodyParser = require('body-parser');




// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.text());
	app.use(bodyParser.json({type:'application/vnd.api+json'}));

	// API GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases when a user visits a link 
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table) 
	// ---------------------------------------------------------------------------

	app.get('/api/friends', function(req, res){
		res.json(friendsData);
	});

	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// (ex. User fills out a reservation request... this data is then sent to the server...
	// Then the server saves the data to the userData array)
	// ---------------------------------------------------------------------------

	app.post('/api/friends', function(req, res){
		console.log(req.body);
		friendsData.push(req.body);
		// //logic goes here to get the match
		// function compareMatches(arr1, arr2) {
		// 		var diff = 0;
		// 		for (var i = 0; i < arr1.length; i++) {
		// 			var num =  Math.abs(arr1[i] - arr2[i]);
		// 			diff += num;
		// 		}
		// 		C.push(diff);
		// 	}

		// // send back match \/ \/ \/
		// res.json(matchJSON); // KEY LINE
	});

}