
var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var flash = require('connect-flash');
var home = require('./routes/home.js');
var about = require('./routes/about.js');
var contact = require('./routes/contact.js');
var products = require('./routes/products.js');
var checkout = require('./routes/checkout.js');
var Item = require('./model/item.js');
var MongoStore = require('connect-mongo')(session);



var app = express();



app.set('view engine', 'ejs');


app.use(cookieParser());
app.use(session({
    secret: 'mysupersecret', 
    resave: false, 
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 180 * 60 * 1000 }
}));
app.use(flash());
app.use(express.static(__dirname + '/public'));


app.use(function(req,res, next){
    res.locals.session = req.session;
    next();
})




app.use('/', home);
app.use('/about', about);
app.use('/contact', contact);
app.use('/products', products);
app.use('/checkout', checkout);





var mongoDB = 'mongodb://localhost/gun-inventory';
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser:true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDb connection error'));



// var erik = new Item({
//     brand: "erik armory",
//     model: "er31",
//     cartridge:"69mm",
//     imageURL:"https://images.unsplash.com/photo-1581955957646-b5a446b6100a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
//     price:"69.99",
//     featured: true
// });


// erik.save(function(err,item){
//     if(err){
//         console.log("something went wrong");
//     }else{
//         console.log("added entry erik to db:");
//         console.log(item);
//     }
// })


// var erica = new Item({
//     brand: "erica armory",
//     model: "ec33",
//     cartridge: "9mm",
//     imageURL: "https://images.unsplash.com/photo-1594232352231-11a0958d131c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1552&q=80",
//     price: "169.99",
//     featured: true

// });

// erica.save(function(err,item){
//     if(err){
//         console.log("something went wrong");
//     }else{
//         console.log("added entry erica to db");
//         console.log(item);
//     }
// })








app.listen(process.env.PORT || 3000, function(){

    console.log("server now runnning");
})