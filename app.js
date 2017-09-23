var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var index = require('./routes/index');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.listen(3000, function(err){
    if(err){
        console.log("Connection Failed on 3000 port");
    }
    else{
        console.log("Connected on 3000 port");
    }
})