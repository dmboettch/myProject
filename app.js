var express = require('express');
var request = require('request');
var sendmail = require('sendmail')();
var port = 3000;
var app = express();

app.set('view engine', 'ejs');
//set public static files (for css)
app.use(express.static('public'));

app.get('/', function(req,res){
    res.render('pages/index',{
        title: 'Farm',
        pageTitle: 'About Us'
    });
});

app.get('/fowl', function(req,res){
    res.render('pages/fowl',{
        title: 'Barnyard Fowl',
        pageTitle: 'Barnyard'
    });
});

app.get('/garden', function(req,res){
    res.render('pages/garden',{
        title: 'Garden',
        pageTitle: 'The Garden!'
    });
});

app.get('/pest', function(req,res){
    res.render('pages/pest',{
        title: 'Pest Control',
        pageTitle: 'Mousers'
    });
});

app.get('/herd', function(req,res){
    res.render('pages/herd',{
        title: 'Herders',
        pageTitle: 'Dogs'
    });
});

app.get('/sting', function(req,res){
    res.render('pages/sting',{
        title: 'Stingers',
        pageTitle: 'Bees'
    });
});

app.get('/shop', function(req,res){
    res.render('pages/shop',{
        title: 'Shopping',
        pageTitle: 'Shopping'
    });
});

app.get('/contact', function(req,res){
    res.render('pages/contact',{
        title: 'Contact Form',
        pageTitle: 'Contact Form'
    });
});

app.listen(port, function(){
    console.log('Example app listening on port' + port);
});