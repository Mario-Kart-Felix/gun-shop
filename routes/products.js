var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Items = require('../model/item.js');



router.get('/', async function(req, res){
    console.log("all product page");
    let Data = await Items.find();
    console.log("data uploaded")
    res.render('products.ejs', {Data});
})

module.exports = router;