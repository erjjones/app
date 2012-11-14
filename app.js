
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , hbs = require('hbs');

var app = express();
	
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hbs');
  app.set('server', 'localhost');
  app.use(express.favicon(__dirname + '/public/images/favicon.ico'));    
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

var json = { 
	title: "Starter App"
	, url: "http://" + app.get('server') + ":" + app.get('port')	
};

app.get('/', function(req, res) {
	json.home = true;	
	json.about = false;
	json.contact = false;	
	res.render("index", json);
});

app.get('/about', function(req, res) {		
	json.home = false;	
	json.about = true;
	json.contact = false;	
	res.render("about", json);
});

app.get('/contact', function(req, res) {		
	json.home = false;	
	json.about = false;
	json.contact = true;	
	res.render("contact", json);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
