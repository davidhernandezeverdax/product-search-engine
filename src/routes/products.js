const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', async (req, res) => {
  try {
    let query = Product.find();

    // Filters
    if (req.query.priceMin) query.where('price').gte(req.query.priceMin);
    if (req.query.priceMax) query.where('price').lte(req.query.priceMax);
    if (req.query.dateMin) query.where('createdAt').gte(new Date(req.query.dateMin));
    if (req.query.dateMax) query.where('createdAt').lte(new Date(req.query.dateMax));
    if (req.query.name) query.where('name').regex(new RegExp(req.query.name, 'i'));
    if (req.query.stockMin) query.where('stock').gte(req.query.stockMin);
    if (req.query.stockMax) query.where('stock').lte(req.query.stockMax);

    const products = await query.exec();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error searching products', error: error.message });
  }
});

module.exports = router;
