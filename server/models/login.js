const db = require('../../db/database.js');

module.exports = {
    check: ({ username }) => {
        const query = `SELECT id FROM users WHERE username = '${username}'`;
        return db.query(query);
    },
    login: ({username, password}) => {
        const query = `SELECT name, role FROM users WHERE username = '${username}' AND password = '${password}'`;
        return db.query(query);
    },
    create: ({name, username, password, role}) => {
        const values = `'${name}', '${username}', '${password}', '${role}'`;
        const query = `INSERT INTO users(name, username, password, role) VALUES(${values})`;
        return db.query(query);
    },
};