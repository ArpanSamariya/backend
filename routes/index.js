var express = require('express');
var router = express.Router();

var URL="mongodb://arpan:arpansam@ds133162.mlab.com:33162/bus";

const  db=require('monk')(URL);

const docs=db.get('u');
/* GET home page. */


router.get('/welcomess', function(req, res, next) {
    res.send('welcome to heroku ');
});

module.exports = router;
