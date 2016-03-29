var express = require('express');
var request = require('request');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var auth = require('./key_auth.json');

//var port = 3000;
//activate for Heroku
var port = process.env.PORT || 3000;

var mailgun = require('mailgun-js')({apiKey: auth.api_key, domain: auth.domain});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
//set public static files (for css)
app.use(express.static('public'));

app.get('/', function(req,res){
    res.render('pages/home',{
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

app.get('/cat', function(req,res){
    res.render('pages/cat',{
        title: 'Cats',
        pageTitle: 'Cats'
    });
});

app.get('/chicken', function(req,res){
    res.render('pages/chicken',{
        title: 'Chicken',
        pageTitle: 'Chicken'
    });
});

app.get('/bee', function(req,res){
    res.render('pages/bee',{
        title: 'Bees',
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

app.post('/capture', function(req,res){
    var data = req.body.dataPackage;

    var mailOptions = {
    from: 'alltruefarm@gmail.com',
    replyTo: data.name + '<' + data.email + '>',
    to: 'alltruefarm@gmail.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness! @ 9:08'
    };

    mailgun.messages().send(mailOptions, function (error, body) {
        console.log(error);
    });

    //res.render('pages/thankYou');
});

app.listen(port, function(){
    console.log('Example app listening on port' + port);
});
