const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    brand: {type: String, require: true},
    model: {type: String, require: true},
    color: {type: String, require: true},
    price: {type: Number, require: true},
});

module.exports = mongoose.model("Car",carSchema);