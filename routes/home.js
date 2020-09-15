var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Items = require('../model/item.js');
var Cart = require('../model/cart.js');





router.get('/', async function (req, res) {
    
    console.log("you are home")
    console.log("took you long enough")
    let Data = await Items.find({ featured: true});
    console.log("data");
    

    
    
    res.render('index.ejs', {Data});
});


router.get('/add-to-cart/:id',  function(req, res){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart :  {}  );
    Items.findById(productId, function(err, product){
        if(err){
            return res.redirect('/');
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('back');
    })
 
    
})

router.get("/reduce/:id" , function(req, res){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.reduce(productId);
    req.session.cart = cart;
    res.redirect('/checkout')

})



router.get("/remove/:id", function (req, res) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/checkout')

})




module.exports = router;