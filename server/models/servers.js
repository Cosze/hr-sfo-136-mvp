const db = require('../../db/database.js');

module.exports = {
    getRequests: (status) => {
        // gets open requests from database, sorted by scheduled time
        db.query();
        return `getting open requests from db for server`;
    },
    getCompleted: (serverID) => {
        // gets completed requests from database
        db.query();
        return `getting completed requests from db for server`;
    },
    acceptRequest: (requestID) => {
        // updates status of a request to accepted, updates server name and time accepted
        db.query();
        return `server is accepting a request`;
    },
    startRequest: (requestID) => {
        // updates status of a request to started, sets request start time
        db.query();
        return `server is starting a request`;
    },
    completeRequest: (requestID) => {
        // updates status of a request to completed, sets request completed time
        db.query();
        return `server is completing a request`;
    },
    cancel: (requestID) => {
        // updates status of a request to open, sets server name and time accepted to null
        db.query();
        return `server has cancelled the request`;
    },
};
