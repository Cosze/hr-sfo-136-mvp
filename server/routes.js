const controller = require('./controllers');
const router = require('express-promise-router')();

router.route('/')
  .get((req, res, next) => {
    console.log('get request at /requests/');
    res.status(200).send();
  });

router.route('/clients/:id') // login currently omitted
  .get(controller.clients.getRequests) // gets requests made by client at :id
  .post(controller.clients.postRequest) // posts a new request to database
  .put(controller.clients.updateRequest); // updates a request for when editting is selected
  .delete(controller.clients.cancelRequest); // deletes a request for when client cancels

// get open requests for server
router.route('/servers/:id/open', controller.servers.getOpenRequests);

// get completed requests by server
router.get('/servers/:id/completed', controller.servers.getCompletedRequests);

// accept request for server
router.put('/server/:id/accept', controller.servers.acceptRequest);

// start request for server
router.put('/server/:id/start', controller.servers.startRequest);

// complete request for server
router.put('/server/:id/complete', controller.servers.completeRequest);

// cancel request for server
router.put('/server/:id/cancel', controller.servers.cancel);

module.exports = router;