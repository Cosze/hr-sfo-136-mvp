const { Pool } = require('pg');
const login = require('../client/env/config.js');
const pool = new Pool(login);
pool.connect();

module.exports = pool;