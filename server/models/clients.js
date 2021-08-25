const db = require('../../db/database.js');

module.exports = {
    login: (userDetails) => {
        // function that will confirm a login session
        return `client is logging in`;
    },
    postRequest: (userID, data) => {
        // function that posts a request into the database
        return `client is posting a request`;
    },
    getRequests: (userID) => {
        // function that gets all requests made by this user
        return `client is getting their requests`;
    },
    updateRequest: (userID, requestID) => {
        // function that edits a request that is either open (or accepted)
        return `client want to edit their previous request`;
    },
    cancelRequest: (userID, requestID) => {
        // function that removes a request from database
        return `client wants to cancel their request`;
    },
};