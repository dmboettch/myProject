var express = require('express');
var request = require('request');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

var mailgun = require('mailgun-js')({apiKey: process.env.mailgun_api_key, domain: process.env.mailgun_domain});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
//set public static files (for css)
app.use(express.static('public'));

app.get('/', function(req,res){
    res.render('pages/home',{
        title: 'Alltrue Farm',
        pageTitle: 'About Us'
    });
});

app.get('/turkey', function(req,res){
    res.render('pages/turkey',{
        title: 'Alltrue Turkeys',
        pageTitle: 'Turkeys'
    });
});

app.get('/garden', function(req,res){
    res.render('pages/garden',{
        title: 'Alltrue Garden',
        pageTitle: 'The Garden!'
    });
});

app.get('/cat', function(req,res){
    res.render('pages/cat',{
        title: 'Alltrue Cats',
        pageTitle: 'Cats'
    });
});

app.get('/chicken', function(req,res){
    res.render('pages/chicken',{
        title: 'Alltrue Chickens',
        pageTitle: 'Chickens'
    });
});

app.get('/bee', function(req,res){
    res.render('pages/bee',{
        title: 'Alltrue Bees',
        pageTitle: 'Bees'
    });
});

app.get('/shop', function(req,res){
    res.render('pages/shop',{
        title: 'Alltrue Shopping',
        pageTitle: 'Shopping'
    });
});

app.get('/contact', function(req,res){
    res.render('pages/contact',{
        title: 'Alltrue Contact Form',
        pageTitle: 'Contact Form'
    });
});

app.post('/contact', function(req,res){
    console.log(req.body);
    var mailOptions = {
    from: 'alltruefarm@gmail.com',
    'h:Reply-To': req.body.emailAddr,
    to: 'alltruefarm@gmail.com',
    subject: req.body.subject,
    text: "First Name" + ":" + " " + req.body.firstName + "\n" + "Last Name" + ":" + " " + req.body.lastName + "\n" + "email" + ":" + " " + '<' + req.body.emailAddr + '>' + "\n" + "\n" + req.body.comments
    };
console.log(mailOptions);
    mailgun.messages().send(mailOptions, function (error, body) {
        if(error){
            return res.send('There was an error')
        }
        else{
            console.log(body)
            return res.render('pages/thankYou',{
                title: 'Alltrue Farm',
                pageTitle: 'Thank You!'
            });
        }
    });
});

app.listen(port, function(){
    console.log('Example app listening on port' + port);
});
