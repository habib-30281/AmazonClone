const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51N7i3yDVZs30dx99OkiiKZpbRz4T3xg5m3EJ05mMeryc7Hkjo44J0fu7btwomwYMbEsrzsfdNT4EUHjObMcMLqkX00xs3ZwX8L");

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received BOOM!!!!, for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunit of the currency
    currency: "usd",
  });

  // Set appropriate CORS headers to allow requests from http://localhost:3000
  response.set({
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "GET, POST",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  response.status(201).send({ clientSecret: paymentIntent.client_secret });
});

exports.api = functions.https.onRequest(app);
