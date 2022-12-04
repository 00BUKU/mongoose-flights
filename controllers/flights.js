module.exports = {
    flights: addFlights,
}

function addFlights(req, res){
    res.send('ADD FLIGHTS PAGE')
}

module.exports = {
    all: allflights
}

function allflights(req, res){
    res.send('ALL FLIGHTS PAGE')
}