const db = require('../../db/database.js');

module.exports = {
    check: ({ username }) => {
        const query = `SELECT id FROM users WHERE username = '${username}'`;
        return db.query(query);
    },
    login: ({username, password}) => {
        const query = `SELECT id FROM users WHERE username = '${username}' AND password = '${password}'`;
        return db.query(query);
    },
    create: (body) => {},
};