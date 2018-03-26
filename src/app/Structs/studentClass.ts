import {Tweet} from './tweetClass';
export class Student {
  id: number;
  name : string;
  handle: string;
  section: string;
  tweets: Tweet[];
  totTweets: number;
  totRetweets: number;
  totLikes: number;
  topicDist: string[];
  topicDistNum: number[];

  constructor(name: string, handle: string) {
    this.name = name;
    this.handle = handle;
  }
}
