const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: Date,
    }
})

const flightSchema = new Schema({
    airline: {
      type: String,
      enum: ['American', 'Delta', 'United', 'Southwest']
    },
    airport: {
      type: String, enum: ['ATL', 'DEN', 'SAN', 'LAX', 'DFW']
    },
    flightNo: {
      type: Number, min:10, max:9999},
    daparts: {
      type: Date
    },
    destinations: [destinationSchema]
    
});


module.exports = mongoose.model("Flight", flightSchema);