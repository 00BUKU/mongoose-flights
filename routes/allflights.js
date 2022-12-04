var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/allflights');

router.get('/allflights', flightsCtrl.flights);

router.get('/', function(req, res, next) {
  res.render('allflights', { title: 'MONGOOSE FLIGHTS' });
});
module.exports = router;