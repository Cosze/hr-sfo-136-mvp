const db = require('../../db/database.js');

module.exports = {
    getRequests: (status) => {}, // gets open requests from database, sorted by scheduled time
    getCompleted: (serverID) => {}, // gets completed requests from database
    acceptRequest: (requestID) => {}, // updates status of a request to accepted, updates server name and time accepted
    startRequest: (requestID) => {}, // updates status of a request to started, sets request start time
    completeRequest: (requestID) => {}, // updates status of a request to completed, sets request completed time
    cancelRequest: (requestID) => {}, // updates status of a request to open, sets server name and time accepted to null
};
