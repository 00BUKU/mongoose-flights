const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
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