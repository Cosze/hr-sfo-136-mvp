const controller = require('./controllers');
const router = require('express-promise-router')();

router.route('/')
  .get((req, res, next) => {
    console.log('get request at /requests/');
    res.status(200).send();
  });

router.route('/clients/:id')
  .get()
  .post()
  .put();

router.route('/servers/:id')
  .get() // use query completed=<boolean> to differentiate open vs completed requests
  .put();

module.exports = router;