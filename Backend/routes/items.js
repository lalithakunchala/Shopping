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
    newItem.image = req.body.image;
    newItem.price = req.body.price;
    newItem.rating = req.body.rating;
    newItem.posted_by = req.body.posted_by;
    newItem.posted_date = Date.now;
    newItem.save(function(err, item){
        if(err) {
            res.json({success:"false",message:"error while adding"});
        } else {
            console.log(item);
            res.json({success:"true",message:"item updated"});
        }
    });
});

router.patch('/:id', function(req, res){
    console.log('getting all items');
    Item.findOneAndUpdate({_id:req.params.id}, {$set:{ price:req.body.price}},function(err, items){
        if(err) {
            res.json({success:"false",message:"error while updating"});
        } else {
            console.log(items);
            res.json({success:"true",message:"item updated"});
        }
    });
});

router.delete('/:id', function(req, res){
    Item.findByIdAndRemove({
        _id: req.params.id
    },function(err, item){
        if(err) {
            res.send('error while deleting');
        } else {
            console.log(book);
            res.json({success:"true",message:"item deleted"});
        }
    });
});