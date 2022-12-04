const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/flights', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
	
const flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number,
  daparts: Date
});


module.exports = mongoose.model('Flight', flightSchema);