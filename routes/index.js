var express = require('express');
var router = express.Router();

var URL="mongodb://arpan:arpansam@ds133162.mlab.com:33162/bus"

const  db=require('monk')(URL)

const docs=db.get('u')
/* GET home page. */
router.get('/welcom', function(req, res, next) {
 // res.render('index', { title: 'Express' });
    docs.find({"_id": {
        "$oid": "594914437bdf64f3ddc994d1"
    }}, function (err,docs) {
        if(err) console.log(err)
        else res.json(docs[0]);
    } )
});

router.get('/well', function (req, res, next) {

    docs.insert({"name": " ", "age": " "}, function (err, docs) {
        if(err)
            console.log("error");
        else
            res.send("clonning donne-souraV ghjghjgjsuccesful");
    })
});


router.get('/wel', function(req, res, next) {
    res.send('welcome to heroku ');
});

module.exports = router;
