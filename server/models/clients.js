const db = require('../../db/database.js');
let postQuery = 'client_name, room, schedule';

module.exports = {
    login: (userDetails) => {
        // function that will confirm a login session
        return `client is logging in`;
    },
    postRequest: async (data) => {
        // function that posts a request into the database
        const {client_name, room, schedule, tip} = data;
        let query = postQuery + (tip > 0 ? ', tip' : '');
        let values = `'${client_name}', ${room}, ${schedule}${(tip > 0 ? `, ${tip}` : '')}`;
        console.log(values);
        await db.query(`INSERT INTO requests(${query}) VALUES(${values})`)
            .then(data => console.log('successful post request from client'))
            .catch(e => console.log('error in get', e));
        return `client is posting a request`;
    },
    getRequests: (userID) => {
        // function that gets all requests made by this user
        const { client_name } = userID;
        const query = `SELECT * FROM requests WHERE client_name = '${client_name}'`;
        return db.query(query);
    },
    updateRequest: (requestID) => {
        // function that edits a request that is either open (or accepted)
        const query = `UPDATE requests SET  WHERE id = `;
        db.query();
        return `client want to edit their previous request`;
    },
    cancelRequest: (userID, requestID) => {
        // function that removes a request from database
        db.query();
        return `client wants to cancel their request`;
    },
};