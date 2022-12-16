const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flightDoc) {

        Ticket.find({ flight: flightDoc }, function (err, ticketsDoc) {

            res.render('flights/show', { flight: flightDoc, tickets: ticketsDoc })
        })

    })
}
function index(req, res) {
    Flight.find({}, function (err, flightDoc) {
        res.render('flights/index', { flights: flightDoc })
    })
}
function newFlight(req, res){
    res.render('flights/new');
}


function create(req, res) {
Flight.create(req.body, function (err, flightDoc) {
    if (err) {
        console.log(err);
        return res.send('err creating check the terminal')
    }
    res.redirect('/flights')
});
}




