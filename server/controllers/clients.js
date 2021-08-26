const models = require('../models');

module.exports = {
    login: (req, res) => {
        // login as client
        try {
            const data =  models.clients.login();
            res.status(200).send(data);
        } catch (e) {
            res.status(500).send('Error logging in for client', e);
        }
    },
    postRequest: (req, res) => {
        // post new request
        try {
            const data = models.clients.postRequest(req.body);
            res.status(200).send(data);
        } catch (e) {
            res.status(500).send('Error posting request for client', e);
        }
    },
    getRequests: async (req, res) => {
        // get all requests client has made
        try {
            const data = await models.clients.getRequests(req.query);
            res.status(200).send(data.rows);
        } catch (e) {
            res.status(500).send('Error getting requests for client', e);
        }
    },
    updateRequest: (req, res) => {
        // update an open or started request
        try {
            const data = models.clients.updateRequest(req.query.request_id, req.body);
            res.status(200).send(data);
        } catch (e) {
            res.status(500).send('Error updating request for client', e);
        }
    },
    cancelRequest: (req, res) => {
        // cancel an open request
        try {
            const data = models.clients.cancelRequest();
            res.status(200).send(data);
        } catch (e) {
            res.status(500).send('Error cancelling request for client', e);
        }
    },
};
