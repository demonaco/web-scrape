var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SaveSchema = new Schema({
    // title: String,
    body: String,
});

var Note = mongoose.model("Note", SaveSchema);

module.exports = Note;