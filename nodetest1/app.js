var express = require('express');

var path = require('path');

var favicon = require('serve-favicon');

var logger = require('morgan');

var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');



//var socket = require('socket.io');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//GET Methods
app.get('/', function(req, res){
	res.sendFile(__dirname + '/input.html');
});

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
});

http.listen(3000, function(){
	console.log('listening on port 3000');
});





//var mongo = require('mongodb');
//var monk = require('monk');
//var db = monk('localhost:27017/nodetest1');

//Socket.io stuff
//var http = require('http');
//	//Server listening on port 3000
//var server = http.createServer(app).listen(app.get('port'), function(){
//	console.log("Express server listening on port " + app.get('port'));
//});
//var io = require('socket.io').listen(server);


// var routes = require('./routes/index');

// var users = require('./routes/users');




// // view engine setup

// app.set('views', path.join(__dirname, 'views'));

// app.set('view engine', 'jade');



// // uncomment after placing your favicon in /public

// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// app.use(logger('dev'));

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'public')));



// //Make db accessible to our router
// app.use(function(req, res, next){
// 	req.db = db;
// 	next();
// });

// //directives telling Express what route files to use
// app.use('/', routes);

// app.use('/users', users);




// // catch 404 and forward to error handler

// app.use(function(req, res, next) {

// 	var err = new Error('Not Found');
 
// 	err.status = 404;

// 	next(err);

// });



// // error handlers



// // development error handler

// // will print stacktrace

// if (app.get('env') === 'development') {

// 	app.use(function(err, req, res, next) {

// 	res.status(err.status || 500);

// 	res.render('error', {

// 		message: err.message,

// 		error: err

// 	});

// });

// }



// // production error handler

// // no stacktraces leaked to user

// app.use(function(err, req, res, next) {

// 	res.status(err.status || 500);

// 	res.render('error', {

// 		message: err.message,

// 		error: {}

// 	});

// });




 module.exports = app;
