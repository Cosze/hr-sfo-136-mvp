const controller = require('./controllers');
const router = require('express-promise-router')();

router.route('/')
  .get((req, res, next) => {
    console.log('get request at /requests/');
    res.status(200).send();
  });

router.get('/check', controller.login.check);
router.post('/login', controller.login.login);
router.post('/create', controller.login.create);

router.route('/clients/:id') // login currently omitted
  .get(controller.clients.getRequests) // gets requests made by client at :id
  .post(controller.clients.postRequest) // posts a new request to database
  .put(controller.clients.updateRequest) // updates a request for when editting is selected
  .delete(controller.clients.cancelRequest); // deletes a request for when client cancels

// get open requests for server
router.get('/servers/:id/open', controller.servers.getOpenRequests);

// get completed requests by server
router.get('/servers/:id/completed', controller.servers.getCompletedRequests);

// accept request for server
router.put('/servers/:id/accept', controller.servers.acceptRequest);

// start request for server
router.put('/servers/:id/start', controller.servers.startRequest);

// complete request for server
router.put('/servers/:id/complete', controller.servers.completeRequest);

// cancel request for server
router.put('/servers/:id/cancel', controller.servers.cancel);

module.exports = router;