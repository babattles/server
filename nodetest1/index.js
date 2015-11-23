// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });
//var express = require('express');

//var router = express.Router();


//var app = express();
//app.set('port', process.env.PORT || 3000);
//var http = require('http').Server(app);
//var server = http.createServer(app).listen(3000, function(){
//	console.log('Express server listening on port 3000');
//});

//var io = require('socket.io').listen(http);


//var path = require("path");



/* GET home page. */

//router.get('/', function(req, res, next) {
//	res.render('index', { title: 'Express' });
//});



/* GET input page */
// //app.get('/input', function(req, res) { 
// 	res.sendFile(path.join(__dirname , '../views', 'input.html'));
// });

// io.on('connection', function(socket){
// 	socket.on('chat message', function(msg){
// 		io.emit('chat message', msg);
// 	});
// });

// http.listen(3000, function(){
// 	console.log('listening on: 3000');
// });

// //io.sockets.on('connection', function () {
// //	console.log('hello world im a hot socket');
// //});

// //io.on('connection', function(socket){
// //  console.log('a user connected');
// //  socket.on('disconnect', function(){
// //    console.log('user disconnected');
// //  });
// //});

// //io.on('connection', function(socket){
// //  socket.on('chat message', function(msg){
// //    console.log('message: ' + msg);
// //  });
// //});


// // GET Hello World page. 
// router.get('/helloworld', function(req, res) {
// 	res.render('helloworld', { title: 'Hello, World!' });
// });

// // GET Userlist page. 
// router.get('/userlist', function(req, res) {
// 	var db = req.db;
// 	var collection = db.get('usercollection');
// 	collection.find({},{},function(e,docs){
// 		res.render('userlist', {
// 			"userlist" : docs
// 		});
// 	});
// });

// // GET New User page. 
// router.get('/newuser', function(req, res) {
// 	res.render('newuser', { title: 'Add New User' });
// });

// // POST to Add User Service 
// router.post('/adduser', function(req,res) {

// 	// Set internal db variable
// 	var db = req.db;

// 	// Get form values. These rely on the "name" attributes
// 	var userName = req.body.username;
// 	var userEmail = req.body.useremail;

// 	// Set our collection
// 	var collection = db.get('usercollection');

// 	// Submit to the DB
// 	collection.insert({
// 		"username" : userName,
// 		"email" : userEmail
// 	}, function (err, doc) {
// 		if (err) {
// 			// If it failed, return error
// 			res.send("There was a problem adding the information to the database.");
// 		}
// 		else {
// 			// And forward to success page
// 			res.redirect("userlist");
// 		}
// 	});
// });

// module.exports = router;
