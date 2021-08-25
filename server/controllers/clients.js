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
            const data =  models.clients.postRequest();
            res.status(200).send(data);
        } catch (e) {
            res.status(500).send('Error posting request for client', e);
        }
    },
    getRequests: (req, res) => {
        // get all requests client has made
        try {
            const data =  models.clients.getRequests();
            res.status(200).send(data);
        } catch (e) {
            res.status(500).send('Error getting requests for client', e);
        }
    },
    updateRequest: (req, res) => {
        // update an open or started request
        try {
            const data = models.clients.updateRequest();
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
