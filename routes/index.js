var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Center = require('../models/center.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//route get center data

router.get('/centers', function(req, res, next) {
  Center.find({ type: "center" }, function (err, docs) {
          res.json(docs);
      });
});

//route get center data by id

router.get('/center/:center_id', function (req, res) {
  Center.findById(req.params.center_id, function(err, docs) {
    if (err)
    res.send(err);
  res.render('benchmarking',  {idea: docs} );
});
});

//Route to post new idea
router.post('/newcenter', function(req, res) {

 var center = new Center();

  center.name= req.body.name;
  center.url = req.body.url;
  center.likes = req.body.likes;
  center.type = "center";


  // Save the idea and check for errors
  center.save(function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'New center added', data: center});
  });
});

module.exports = router;
