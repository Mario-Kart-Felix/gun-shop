var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var itemSchema = new Schema({

    brand: {type: String, required: true},
    model: { type: String, required: true },
    cartridge: { type: String, required: true },
    imageURL: { type: String, required: true },
    price: { type: Number, required: true },
    featured: {type: Boolean, required: true}


});



module.exports = mongoose.model("Items", itemSchema);