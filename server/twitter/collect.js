var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);
var hashtags = ["#1102kidsci"]; //collect these from database instead
var lastid = 1; //get last id in database
for(var i = 0; i < hashtags.length; i++) {
    var maxId = 0;
    var params = { q: hashtags[i], count: 100, since_id: lastid};
    T.get('search/tweets', params, function(err, data, response) {
        if(!err){
            var tweets = data['statuses'];
            console.log(tweets);
            maxId = tweets[tweets.length - 1]['id'];
        } else {
            console.log(err);
        }
    });
    while(maxId > lastid) {
        var params = { q: hashtags[i], count: 100, since_id: lastid, max_id: maxId };
        T.get('search/tweets', params, function(err, data, response) {
            if(!err){
                var tweets = data['statuses'];
                console.log(tweets);
                maxId = tweets[tweets.length - 1]['id'];
            } else {
                console.log(err);
            }
        });
    }
}
