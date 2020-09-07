const express = require("express");
const app = express();
const path = require('path');
const MONGODB_URI = require('./config')

const mongoose = require("mongoose");
//local
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
//remote 
mongoose.connect(process.env.MONGODB_URI|| MONGODB_URI, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', function(){
    console.log("couldn't connect to db");
  });
  
  db.once('open', function() {
    console.log("db connected")
  });

  app.use(express.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

var cors = require("cors");
app.use(cors());

var items = require('./routes/items');
var user = require('./routes/user');
var admin = require('./routes/admin');
app.use('/items' ,items);
app.use('/user' ,user);
app.use('/admin' ,admin);

var port = process.env.PORT||8000;

if(process.env.NODE_ENV === "production"){

  app.use(express.static('frontend/build'))

  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'frontend','build','index.html'));
  })
}

app.listen(port, function(){
    console.log('app listening on port: '+port);
});