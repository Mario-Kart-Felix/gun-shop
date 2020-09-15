var express = require('express');
var router = express.Router();



router.get('/', async function(req, res, ){
    console.log("about page is here");
    res.render('about.ejs');

})


module.exports = router;
