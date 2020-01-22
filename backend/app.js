require('./db/mongoose')
const express = require('express')
const mongoose =require("mongoose");

const app = express()
const port = 4000
mongoose.connect('mongodb://localhost/BrillioSolution', {
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
// },()=>{
    
})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  var solutin= db.collection("solutions")
 // console.log(solutin.find());
 var collection=solutin.find();
 collection.once('readable',()=>{
     
   console.log(collection.forEach(ele=>{
       
       console.log(1);
       //console.log(ele);
   }));
 })

});
app.use(express.json())


module.exports = app
