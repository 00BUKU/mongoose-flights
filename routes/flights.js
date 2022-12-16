var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');
const ticketCtrl = require('../controllers/tickets')


router.get('/:id', flightsCtrl.show)
router.get('/new', flightsCtrl.new);
router.get('/', flightsCtrl.index);
router.post('/', flightsCtrl.create);

module.exports = router;
