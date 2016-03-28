var express = require('express');
var request = require('request');
var app = express();

//var port = 3000;
//activate for Heroku
var port = process.env.PORT || 3000;

//Testing mailgun
var api_key = 'key-c5d60ef5c6bcd27e014c3898bbfb7c97';
var domain = 'alltruefarm.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var data = {
    from: 'alltruefarm@gmail.com',
    to: 'alltruefarm@gmail.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness! @ 9:34'
};
mailgun.messages().send(data, function (error, body) {
    console.log(body);
});


app.set('view engine', 'ejs');
//set public static files (for css)
app.use(express.static('public'));

app.get('/', function(req,res){
    res.render('pages/index',{
        title: 'Farm',
        pageTitle: 'About Us'
    });
});

app.get('/turkey', function(req,res){
    res.render('pages/turkey',{
        title: 'Turkey',
        pageTitle: 'Turkey'
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

app.get('/chicken', function(req,res){
    res.render('pages/chicken',{
        title: 'Chicken',
        pageTitle: 'Chicken'
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