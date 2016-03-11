var express = require('express');
var request = require('request');

var app = express();

app.set('view engine', 'ejs');






console.log('Hello');

app.listen(3000, function(){
    console.log('Example app listening on port 3000.');
});