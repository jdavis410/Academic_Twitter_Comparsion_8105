 // grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var studentSchema = new Schema({
        id: { type: Number, required: true, unique: true },
        name :  String,
        handle:  { type: String, required: true },
        section: String,
        totTweets: Number,
        totRetweets: Number,
        totLikes: Number,
        topicDist: [String],
        topicDistNum: [Number]
});

var StudentModel = mongoose.model('StudentModel', studentSchema);


module.exports = StudentModel;

