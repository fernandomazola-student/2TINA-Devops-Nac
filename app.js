var express = require('express');
var ejs = require('ejs');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/w3images', express.static('./public/images'));

app.get('/', function(req, res){
    res.render('index');
});

app.listen(3000, function() {
    console.log('=> app() listening on container\'s port 3000');
});