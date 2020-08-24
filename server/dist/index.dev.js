"use strict";

var express = require("express");

var getProducts = require("./getProducts");

var getProduct = require("./getProduct.js"); //Connecting to express


var app = express(); //Current Port

var port = 3001; //This is seen as the parent component I guess

app.get("/api/products", getProducts);
app.get("/api/product/:id", getProduct); //console log to make sure that the port is running

app.listen(port, function () {
  console.log("LISTENING TO THE PORT : ".concat(port));
});