const express = require('express')

const router = new express.Router()
const mongoose =require("../db/mongoose");

router.get('/solution',async(req,res)=>{
   console.log("Worked");
    
})



module.exports = router