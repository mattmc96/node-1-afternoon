"use strict";

var products = require("../products.json");

var getProduct = function getProduct(req, res) {
  //if statement! Id added for params
  var item = products.find(function (val) {
    return val.id === parseInt(req.params.id);
  });

  if (!item) {
    //500 status code means something wrong to the senders end
    return res.status(500).send("Item not in list");
  }

  res.status(200).send(item);
}; //module exports has to go for all node


module.exports = getProduct;