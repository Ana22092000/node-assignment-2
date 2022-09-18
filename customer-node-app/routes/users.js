var express = require('express');
var router = express.Router();
const { getCustomer } = require('../services/customer-service');

/* GET users listing. */
// users URL
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
  if (req.body.username == req.body.password && typeof (req.body.username) != 'undefined') {
    res.send({ result: 'Success', msg: 'User logged in successfully!' });
  } else {
    res.send({ result: 'Fail', msg: 'User login failed!' });
  }
});


module.exports = router;
