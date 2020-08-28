// Configuration File for Snoowrap and Snoostorm

// Requiring Snoowrap
const Snoowrap = require('snoowrap');
const identifier = {
    userAgent: process.env.USER_AGENT,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
}

const config = {
    requestDelay: 10000,
    warnings: true,
    continueAfterRatelimitError: false,
    retryErrorCodes: [502, 504, 522],
    maxRetryAttempts: 3,
    debug: false
}




// Snoowrap Init
const requester = new Snoowrap(identifier);

// Snoowrap Config
requester.config(config)

module.exports = {
    requester: requester,
    Snoowrap: Snoowrap,
    identifier:identifier,
    config:config
}