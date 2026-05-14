const router = require('express').Router();
const Booking = require('../models/Booking');

router.post('/', async (req, res) => {

  try {

    const booking = new Booking(req.body);

    await booking.save();

    res.json({ message: 'Booking created' });

  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/', async (req, res) => {

  const bookings = await Booking.find();

  res.json(bookings);

});

module.exports = router;