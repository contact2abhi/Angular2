var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var index_route = require('./routes/index');
var api_route = require('./routes/api');

var app = express();
var port = 3000;


app.use('/', index_route);
app.use('/api', api_route);

//view Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static folder
app.use(express.static(path.join(__dirname, 'client')));

//body parser Middle Ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.listen(port, function () {
    console.log('application sterted at port: ' + port);
});

