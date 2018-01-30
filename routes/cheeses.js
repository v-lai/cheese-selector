const express = require('express');
const router = express.Router({mergeParams: true});
const db = require('../models');

router.get('/', function(req, res){
  db.Cheese.find()
    .then(function(cheeses){
      res.send(cheeses);
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
});

router.get('/random', function (req, res) {
  db.Cheese.count().exec(function (err, count) {
    const random = Math.floor(Math.random() * count);

    db.Cheese.findOne().skip(random).exec(
      function (err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
      }
    )
  });
});

router.get('/:id', function(req, res){
  db.Cheese.findById(req.params.id)
    .then(function(cheese){
      res.send(cheese);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
});

router.post('/', function(req, res){
  db.Cheese.create(req.body)
    .then(function(cheese){
      res.send(cheese);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
});

router.patch('/:id', function(req, res){
  db.Cheese.findByIdAndUpdate(req.params.id, req.body)
    .then(function(cheese){
      res.status(200).send(cheese);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
});

router.delete('/:id', function(req, res){
  db.Cheese.findByIdAndRemove(req.params.id)
    .then(function(){
      res.sendStatus(200);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
});

module.exports = router;
