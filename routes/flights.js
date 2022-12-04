var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

router.get('/flights', flightsCtrl.flights);

router.get('/', function(req, res, next) {
  res.render('flights', { title: 'MONGOOSE FLIGHTS' });
});
module.exports = router;
