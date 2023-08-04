const express = require("express");

const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfully"))
  .catch((err) => {
    console.log(err);
  });

const cors = require("cors");
app.use(cors());
app.use(express.json());

//*=======================

//!  Routes:
//!=============
//? Auth
const authRoute = require("./routes/auth");
app.use("/api/auth", authRoute);

//? User
const userRoute = require("./routes/user");
app.use("/api/users", userRoute);

//? Product
const productRoute = require("./routes/product");
app.use("/api/products", productRoute);

//? Cart
const cartRoute = require("./routes/cart");
app.use("/api/carts", cartRoute);

//? Order
const orderRoute = require("./routes/order");
app.use("/api/orders", orderRoute);

//? Stripe
const stripeRoute = require("./routes/stripe");
app.use("/api/checkout", stripeRoute);
//!=============
//*=======================

app.listen(process.env.PORT || 5000, (req, res) => {
  console.log("Backend server is running");
  res.json("Api running");
});
