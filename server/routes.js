const controller = require('./controllers');
const router = require('express-promise-router')();

router.route('/')
  .get((req, res, next) => {
    console.log('get request at /requests/');
    res.status(200).send();
  });

router.route('/clients/:id')
  .get() // gets requests made by client at :id
  .post() // posts a new request to database
  .put(); // updates a request for when editting is selected
  .delete(); // deletes a request for when client cancels

router.route('/servers/:id')
  .get() // use query completed=<boolean> to differentiate open vs completed requests
  .put(); // uses query accept=<boolean> to differentiate an accept or cancel

module.exports = router;