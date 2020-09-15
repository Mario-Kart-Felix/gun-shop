var express = require('express');
var router = express.Router();
var Cart = require('../model/cart.js');
var Items = require('../model/item.js');


router.get('/', async function(req, res){
    console.log("checkout page");
    if(!req.session.cart){
        return res.render('checkout.ejs', {products: null});
    }else{

       var cart = new Cart(req.session.cart);
       console.log(cart)
        res.render('checkout.ejs', {products: cart.generateArray(), totalPrice: cart.totalPrice}); 
    }
    
})



module.exports = router;