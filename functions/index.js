const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51I3rasD78onwPstXxuWH4MR4sLwbxRebTlCqGRfXH5VS8isesHMjAZgGlk28VyH4diR9gwNnHOIizD3qSkuxvD6t00zoSH2yjf');

// Steps to set up an API

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json()) // to pass data in JSON format

// API routes
app.get('/', (request, response) => response.status(200).send('Hello!'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('request for total  >>>>>', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd'
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
})
// Listen Command
exports.api = functions.https.onRequest(app)


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
