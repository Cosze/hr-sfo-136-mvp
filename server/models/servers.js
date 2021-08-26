const db = require('../../db/database.js');

module.exports = {
    getRequests: (status) => {
        // gets open requests from database, sorted by scheduled time
        const query = `SELECT * FROM requests WHERE status = 'open' ORDER BY schedule ASC`;
        return db.query(query);
        // return `getting open requests from db for server`;
    },
    getCompleted: (serverID) => {
        // gets completed requests from database
        const query = `SELECT * FROM requests WHERE server_name = '${serverID}' AND status = 'completed' ORDER BY schedule DESC`;
        return db.query(query);
        // return `getting completed requests from db for server`;
    },
    acceptRequest: (serverID, requestID) => {
        // updates status of a request to accepted, updates server name and time accepted
        const query = `UPDATE requests SET status = 'accepted', server_name = '${serverID}', time_accepted = ${Date.now()} WHERE id = ${requestID}`;
        return db.query(query);
        // return `server is accepting a request`;
    },
    startRequest: (requestID) => {
        // updates status of a request to started, sets request start time
        const query = `UPDATE requests SET status = 'started', time_started = ${Date.now()} WHERE id = ${requestID}`;
        return db.query(query);
        // return `server is starting a request`;
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
