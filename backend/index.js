const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("./db/config");
const User = require("./db/User");
const Product = require("./db/Product");

app.use(express.json());
app.use(cors({ origin: "*" }));

app.post("/register", async (req, resp) => {
  const user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

app.post("/login", async (req, resp) => {
  let user = await User.findOne(req.body).select("-password");
  if (req.body.email && req.body.password) {
    if (user) {
      resp.send(user);
    } else {
      resp
        .status(401)
        .send({ message: "No user found with these credentials" });
    }
  } else {
    resp.status(401).send({ message: "No user found with these credentials" });
  }
});

app.post("/add-product", async (req, resp) => {
  const product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
});

app.get("/products", async (req, resp) => {
  let products = await Product.find();  
    if (products.length > 0) {
        resp.send(products);
    } else {
        resp.status(404).send({ message: "No products found" });
    }
});
app.listen(8080);
