const mongoose = require('mongoose');

const lunchSchema = mongoose.Schema({
    soup: {type: String, require: true},
    first: {type: String, require: true},
    second: {type: String, require: true}
});

module.exports = mongoose.model("Lunches",lunchSchema);