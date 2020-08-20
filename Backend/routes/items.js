var express = require('express');
var Item = require('../models/item');
const jwt = require("jsonwebtoken");
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

    if (req.headers.authorization) {
        jwt.verify(
          req.headers.authorization.replace("Bearer ", ""),
          "secret_key",
          function (err, tokenUserData) {
              console.log(tokenUserData)
            if (err) {
              return res.sendStatus(403);
            }
    
            else {

                var newItem = new Item();
                newItem.category = req.body.category;
                newItem.image = req.body.image;
                newItem.price = req.body.price;
                newItem.rating = req.body.rating;
                newItem.posted_by = tokenUserData.email;
                newItem.save(function(err, item){
                if(err) {
                    res.json({success:"false",message:"error while adding"});
                } else {
                    console.log(item);
                    res.json({success:"true",message:"item added"});
                }
            });
        }
    })
}

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
            console.log(item);
            res.json({success:"true",message:"item deleted"});
        }
    });
});

module.exports = router;