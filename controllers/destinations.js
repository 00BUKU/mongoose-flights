const Flight = require('../models/flight')


module.exports = {
	create
}



function create(req, res) {	
	console.log(req.body);
	Flight.findById(req.params.id, function (err, flightDoc) {
		if (err) {
			console.log(err)
			return res.send('error from the terminal')
		}
        flightDoc.destinations.push(req.body);
        flightDoc.save(function (err) {
            console.log(flightDoc)  
			res.redirect(`/flights/${req.params.id}`)

        });
	})
};