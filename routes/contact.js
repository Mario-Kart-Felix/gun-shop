var express = require("express");
var router = express.Router();



router.get('/', async function(req, res){
    console.log("the contact page");
    res.render('contact.ejs');

});


module.exports = router;