var express = require('express');
var request = require('request');

var app = express();

app.set('view engine', 'ejs');
//set public static files (for css)
app.use(express.static('public'));

app.get('/', function(req,res){
    res.render('pages/index');

});




console.log('Hello');

app.listen(3000, function(){
    console.log('Example app listening on port 3000.');
});