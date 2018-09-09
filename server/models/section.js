 // grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var sectionSchema = new Schema({
        id: { type: Number, required: true, unique: true },
        courseNum: { type: Number, required: true, unique: true },
        name: String,
        roster: [String],
        topics: [String]
});

var SectionModel = mongoose.model('SectionModel', sectionSchema);

module.exports = SectionModel;
