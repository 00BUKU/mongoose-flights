const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String, 
    enum: ['AUS', 'SAN', 'DEN', 'LAX', 'DFW']
  },
  arrival: {
    type: Date
  }
});


const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American Airlines', 'Delta Airlines', 'United Airlines', 'Southwest Airlines']
  },
  airport: {
    type: String, enum: ['ATL', 'DEN', 'SAN', 'LAX', 'DFW']
  },
  flightNo: {
    type: Number, min:10, max:9999},
  daparts: {
    type: Date,
    default: function () {

      const now = new Date();
      const oneYr = new Date();
      oneYr.setYear(now.getYear() + 1);
      $("#yearFromNow").append(oneYr.toString());
  },
  min: 2022
},

  destinations: [destinationSchema]
});



module.exports = mongoose.model("Flight", flightSchema);
