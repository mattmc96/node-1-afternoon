const products = require("../products.json");

// request and resend
const getProducts = (req, res) => {
  if (req.query.price) {
    //filter out the values or could do .includes
    const items = products.filter(
      (val) => val.price >= parseInt(req.query.price)
    );
  }
  return res.status(200).send(items);
};

module.exports = getProducts;
