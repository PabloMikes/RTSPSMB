const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    header: {type: String, require: true},
    text: {type: String, require: true},
});

module.exports = mongoose.model("News",newsSchema);