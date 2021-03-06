


var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var methodOverride = require('method-override');
var session      = require('express-session');

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); 

 require('./config/passport')(passport); 

// set up our express application
app.use(morgan('dev')); 
app.use(cookieParser()); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); 

app.use(methodOverride('X-HTTP-Method-Override'));


// required for passport
app.use(session({ secret: 'sessionnnn' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

// routes ======================================================================
require('./app/routes.js')(app, passport); 

// launch ======================================================================
app.listen(port);
console.log('écouter ' + port);
exports = module.exports = app; 
