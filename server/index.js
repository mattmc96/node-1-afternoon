const express = require("express");
const getProducts = require("./getProducts");
const getProduct = require("./getProduct.js");

//Connecting to express
const app = express();

//Current Port
const port = 3001;

//This is seen as the parent component I guess
app.get("/api/products", getProducts);
app.get("/api/product/:id", getProduct);

//console log to make sure that the port is running
app.listen(port, () => {
  console.log(`LISTENING TO THE PORT : ${port}`);
});
