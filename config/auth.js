// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1763047730612496', // your App ID
        'clientSecret'  : 'c03ffe72b5cb848f467d372436a9ebbf', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'OifO8VX2vI1TWeBZZpwj2PQPY',
        'consumerSecret'    : '9zBsMAj03ZXzNnijDz77RhLLVfTCgzVkkZbJ1AXSd4FVbBJKOX',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },
};
