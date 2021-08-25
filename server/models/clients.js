const db = require('../../db/database.js');

module.exports = {
    login: (userDetails) => {}, // function that will confirm a login session
    postRequest: (userID, data) => {}, // function that posts a request into the database
    getRequests: (userID) => {}, // function that gets all requests made by this user
    updateRequest: (userID, requestID) => {}, // function that edits a request that is either open (or accepted)
    cancelRequest: (userID, requestID) => {}, // function that removes a request from database
};