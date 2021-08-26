const models = require('../models');

module.exports = {
    getOpenRequests: async (req, res) => {
        // get open requests
        try {
            const data = await models.servers.getRequests();
            res.status(200).send(data.rows);
        } catch (e) {
            res.status(500).send('Error getting open requests for server', e);
        }
    },
    getCompletedRequests: async (req, res) => {
        // get completed requests
        try {
            const data = await models.servers.getCompleted(req.query.server_name);
            res.status(200).send(data.rows);
        } catch (e) {
            res.status(500).send('Error getting completed requests for server', e);
        }
    },
    acceptRequest: async (req, res) => {
        // accept a request
        try {
            const data = models.servers.acceptRequest();
            res.status(200).send(data);
        } catch (e) {
            res.status(500).send('Error accepting requests for server', e);
        }
    },
    startRequest: async (req, res) => {
        // start a request
        try {
            const data = models.servers.startRequest();
            res.status(200).send(data);
        } catch (e) {
            res.status(500).send('Error starting request for server', e);
        }
    },
    completeRequest: async (req, res) => {
        // complete request
        try {
            const data = models.servers.completeRequest();
            res.status(200).send(data);
        } catch (e) {
            res.status(500).send('Error completing request for server', e);
        }
    },
    cancel: async (req, res) => {
        // cancel a request
        try {
            const data = models.servers.cancel();
            res.status(200).send(data);
        } catch (e) {
            res.status(500).send('Error cancelling request for server', e);
        }
    },
};
