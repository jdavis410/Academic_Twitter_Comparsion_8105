import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Tweet} from './Structs/tweetClass';
import {Student} from './Structs/studentClass';

export class InMemoryDataServiceService implements InMemoryDbService{
  createDb() {
    const tweets = [
      { user : '@jdavis', timestamp: 'March 2, 2018',
        content: 'Rihanna is grest',
        hashtags: ['#rihanna', '#fentyBeauty'],
        likes: 11,
        retweets: 34
      },
      { user : '@jdavis', timestamp: 'March 2, 2018',
        content: 'Rihanna is grest',
        hashtags: ['#rihanna', '#fentyBeauty'],
        likes: 11,
        retweets: 34
      },
      { user : '@jdavis', timestamp: 'March 2, 2018',
        content: 'Rihanna is grest',
        hashtags: ['#rihanna', '#fentyBeauty'],
        likes: 11,
        retweets: 34
      },
    ];

    const students = [
      {
        id: 90353,
        name : 'Josh Davis',
        handle: '@jdavis',
        section: 'LMC 2110 A',
        tweets: tweets,
        totTweets: 13,
        totRetweets: 14,
        totLikes: 15,
        topicDist: ['#2110ctv', 'HuckleBerry', 'Research'],
        topicDistNum: [5, 10, 30]
      },
      {
        id: 90234,
        name : 'Same Smith',
        handle: '@ssmith',
        section: 'LMC 2110 A',
        tweets: tweets,
        totTweets: 13,
        totRetweets: 14,
        totLikes: 15,
        topicDist: ['#2110ctv', 'HuckleBerry', 'Research'],
        topicDistNum: [5, 10, 30]
      }
    ];
    const sections = [
      { id: 185629,
        courseNum: 185629,
        name: 'LMC 2110 A',
        roster: students,
        topics: ['#lit', '#LMC', '#2110kidct']
      },
      { id : 185630,
        courseNum: 185630,
        name: 'LMC 2110 B',
        roster: students,
        topics: ['#lit', '#LMC', '#2110Bkidct']
      }
    ];
    const roster1 = [
      {id: '@jdavis'}
    ]
    return {tweets, students, sections};
  }
}
