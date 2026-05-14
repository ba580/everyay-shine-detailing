const router = require('express').Router();
const Stripe = require('stripe');

const stripe = Stripe(process.env.STRIPE_SECRET);

router.post('/create-checkout-session', async (req, res) => {

  const session = await stripe.checkout.sessions.create({

    payment_method_types: ['card'],

    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Premium Detail Package'
          },
          unit_amount: 24900
        },
        quantity: 1
      }
    ],

    mode: 'payment',

    success_url: 'http://localhost:5000/success.html',
    cancel_url: 'http://localhost:5000/cancel.html'

  });

  res.json({ id: session.id });

});

module.exports = router;