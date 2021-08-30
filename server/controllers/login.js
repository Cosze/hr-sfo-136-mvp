const models = require('../models');

module.exports = {
    check: async (req, res) => {
        try {
            const data = await models.login.check(req.query);
            res.status(200).send(data.rows);
        }
        catch(e) {
            res.status(500).send('error checking username', e);
        }
    },
    login: (req, res) => {
        try {
            const data = models.login.login(req.body);
            res.status(201).send('success');
        }
        catch(e) {
            res.status(500).send('error logging in', e);
        }
    },
    create: (req, res) => {
        try {
            const data = models.login.create(req.body);
            res.status(201).send('Successful create');
        }
        catch(e) {
            res.status(500).send('error creating account', e);
        }
    },
};