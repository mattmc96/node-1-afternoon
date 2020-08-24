const express = require("express");
const getProducts = require("./getProducts");
const getProduct = require("./getProduct.js");

//Connecting to express
const app = express();

//Current Port
const port = 3001;

//What
app.get("/api/products", getProducts);
app.get("/api/product/:id", getProduct);

app.listen(port, () => {
  console.log(`LISTENING TO THE PORT : ${port}`);
});
