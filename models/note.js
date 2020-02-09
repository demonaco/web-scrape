var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SaveSchema = new Schema({
    title: String,
    body: String,
    summary: String,
});

var saveNote = mongoose.model("Note", SaveSchema);

module.exports = saveNote;