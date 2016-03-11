var express = require('express');
var request = require('request');
var port = 8080;
var app = express();

app.set('view engine', 'ejs');
//set public static files (for css)
app.use(express.static('public'));

app.get('/', function(req,res){
    res.render('pages/index');
});

app.get('/fowl', function(req,res){
    res.render('pages/fowl');
});

app.get('/garden', function(req,res){
    res.render('pages/garden');
});

app.get('/pest', function(req,res){
    res.render('pages/pest');
});

app.get('/herd', function(req,res){
    res.render('pages/herd');
});

app.get('/sting', function(req,res){
    res.render('pages/sting');
});

app.get('/shop', function(req,res){
    res.render('pages/shop');
});

app.get('/contact', function(req,res){
    res.render('pages/contact');
});

app.listen(port, function(){
    console.log('Example app listening on port' + port);
});