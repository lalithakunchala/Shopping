var express = require('express');
var Item = require('../models/item');
var router = express.Router();


router.get('/', function(req, res){
    console.log('getting all items');
    Item.find({}).exec(function(err, items){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(items);
            res.json(items);
        }
    });
});

router.post('/', function(req, res){
    var newItem = new Item();
    newItem.category = req.body.category;
    newItem.price = req.body.price;
    newItem.rating = req.body.rating;
    newItem.posted_by = req.body.posted_by;
    newItem.date = Date.now;
    newItem.save(function(err, item){
        if(err) {
            res.send('error saving item');
        } else {
            console.log(item);
            res.send(item);
        }
    });
});

router.patch('/:id', function(req, res){
    console.log('getting all items');
    Item.findOneAndUpdate({_id:"5eef91ec6e965c595df000ae"}, {$set:{ email:"updatedemail@gmail.com"}},function(err, items){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(items);
            res.json(items);
        }
    });
});

router.delete('/:id', function(req, res){
    Item.findByIdAndRemove({
        _id: req.params.id
    },function(err, item){
        if(err) {
            res.send('error deleting book');
        } else {
            console.log(book);
            res.json({success:"true",message:"item deleted"});
        }
    });
});