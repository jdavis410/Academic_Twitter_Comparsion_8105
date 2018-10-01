 // grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
export var tweetSchema = new Schema({
	id : { type: Number, required: true, unique: true },
	user : { type: String, required: true},
	timestamp: { type: String, required: true},
	content: String,
	hashtags: [String],
	likes_count: Number,
	retweets_count: Number,
});

var TweetModel = mongoose.model('TweetModel', tweetSchema);

module.exports = TweetModel;

