var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);
var params = { q: "#nodejs" }

T.get('search/tweets', params, function(err, data, response) {
  if(!err){
    console.log(data);
  } else {
    console.log(err);
  }
})
