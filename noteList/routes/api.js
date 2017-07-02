var express = require('express');
var route = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://abhi:abhi@ds135912.mlab.com:35912/abhishek_goyl_db', ['notes']);

// route to get all notes
route.get('/note', function (req, res, next) {
    db.notes.find(function (err, notes) {
        if (err)
        {
            res.status(400);
            res.send({
                'error' : err
            });
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(notes));
    })
});

// route to get one note
route.get('/note/:id', function (req, res, next) {
    db.notes.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, notes) {
        if (err) {
            res.status(400);
            res.send({
                'error': err
            });
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(notes));
    })
});

//route to add note
route.post('/note', function (req, res, next) {
    var note = req.body;
    db.notes.save(note, function (err, note) {
        if (err) {
            res.status(400);
            res.send({
                'error': err
            });
        }
        res.send(JSON.stringify(notes));
    });
});

//route to delete a note
route.delete('/note/:id', function (req, res, next) {
    var note = req.body;
    db.notes.remove({ _id: mongojs.ObjectId(req.params.id) }, {} , function (err, note) {
        if (err) {
            res.status(400);
            res.send({
                'error': err
            });
        }
        res.send(JSON.stringify(notes));
    });
});

module.exports = route;