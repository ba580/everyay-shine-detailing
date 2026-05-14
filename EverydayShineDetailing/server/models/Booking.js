const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  customerName: String,
  email: String,
  phone: String,
  service: String,
  vehicle: String,
  date: String,
  notes: String
});

module.exports = mongoose.model('Booking', BookingSchema);