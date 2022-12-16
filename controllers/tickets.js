const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
	new: newTicket,
	create
}


function create(req, res) {
	console.log(req.params.id)
	req.body.flight = req.params.id
	Ticket.create(req.body, function (err, ticketDoc) {
		if (err) {
			console.log(err);
			return res.send("error check the terminal");
		}
		console.log(ticketDoc)
		res.redirect(`/flights/${req.params.id}`)
	});

}



function newTicket(req, res) {
	res.render('tickets/new', { flight: req.params.id });
}