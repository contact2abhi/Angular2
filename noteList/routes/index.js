var express = require('express');
var route = express.Router();

route.get('/', function (req, res, next) {
    res.render('index.html');
});

module.exports = route;