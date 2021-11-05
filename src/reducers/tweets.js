import posts from './data/Tweets.json';

const tweets = (state = posts,action) => {
    switch (action.type) {
        case 'create-tweet':
            const tweet = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                ...action.tweet,
                "avatar-image": "/a5/images/reactjs.png",
                "logo-image": "/a5/images/reactjs.png",
                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                },
            };
            return[
                {
                    ...tweet,
                },
                ...state
            ];

        case 'delete-tweet':
            return state.filter(tweet => tweet._id !== action.tweet._id);
        case 'like-tweet':
            return state.map(tweet => {
                    if(tweet._id === action.tweet._id) {
                        if(tweet.liked === true) {
                            tweet.liked = false;
                            tweet.stats.likes--;
                        } else {
                            tweet.liked = true;
                            tweet.stats.likes++;
                        }
                        return tweet;
                    } else {
                        return tweet;
                    }
                });
    
        default:
            return(state);
    }

};

export default tweets;
