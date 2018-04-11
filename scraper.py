#!/usr/bin/env python

"""
Prototype Twitter Scraper that writes tweets containing class hashtag to a CSV file
"""

__status__ = "prototype"
__license__ = "BSD 3-Clause"

from twitterscraper import query_tweets
import csv

if __name__ == '__main__':
	with open('tweets.csv', 'w', newline='') as csvfile:
		tweet_writer = csv.writer(csvfile)
		tweet_writer.writerow(['id', 'Full Name', 'Username', 'Likes', 'Replies', 'Retweets', 'Text', 'Timestamp'])
		for tweet in query_tweets("#1102kidsci", 100):
			tweet_writer.writerow([tweet.id, tweet.fullname, tweet.user, tweet.likes, tweet.replies, tweet.retweets, tweet.text, tweet.timestamp]) 