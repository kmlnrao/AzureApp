var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/hello', function(req, res){
    res.send("Hello World! from method.");
 });
 
app.get('/:id', function(req, res){
    res.send('The id you specified is ' + req.params.id);
 });

app.listen(80);