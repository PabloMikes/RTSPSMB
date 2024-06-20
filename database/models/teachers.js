const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    likes: {type: Number, require: true},
    dislikes: {type: Number, require: true},
    picture: {type: String, require: true},
});

module.exports = mongoose.model("Teacher",teacherSchema);