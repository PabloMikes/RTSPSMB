const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    creator: {type: String, require: true},
    text: {type: String, require: true}
});

module.exports = mongoose.model("Comment",commentSchema);