var express = require('express');
var request = require('request');
var port = 3000;
var app = express();

app.set('view engine', 'ejs');
//set public static files (for css)
app.use(express.static('public'));

app.get('/', function(req,res){
    var title = 'Farm';
    res.render('pages/index',{
        title: title
    });
});

app.get('/fowl', function(req,res){
    var title = 'Barnyard Fowl';
    res.render('pages/fowl',{
        title: title
    });
});

app.get('/garden', function(req,res){
    var title = 'Garden';
    res.render('pages/garden',{
        title: title
    });
});

app.get('/pest', function(req,res){
    var title = 'Pest Control';
    res.render('pages/pest',{
        title: title
    });
});

app.get('/herd', function(req,res){
    var title = 'Herders';
    res.render('pages/herd',{
        title: title
    });
});

app.get('/sting', function(req,res){
    var title = 'Stingers';
    res.render('pages/sting',{
        title: title
    });
});

app.get('/shop', function(req,res){
    var title = 'Shopping';
    res.render('pages/shop',{
        title: title
    });
});

app.get('/contact', function(req,res){
    var title = 'Contact Form';
    res.render('pages/contact',{
        title: title
    });
});

app.listen(port, function(){
    console.log('Example app listening on port' + port);
});