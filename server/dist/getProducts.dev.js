"use strict";

var products = require("../products.json"); // request and resend


var getProducts = function getProducts(req, res) {
  if (req.query.price) {
    //filter out the values or could do .includes
    var _items = products.filter(function (val) {
      return val.price >= parseInt(req.query.price);
    });
  }

  return res.status(200).send(items);
};

module.exports = getProducts;