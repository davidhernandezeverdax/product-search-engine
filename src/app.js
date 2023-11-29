const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('your-connection-mongodb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Main Route for Frontend
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/products', { params: req.query });
    res.render('index', { products: response.data });
  } catch (error) {
    res.render('index', { products: [] });
  }
});

// API Routes
app.use('/products', productRoutes);

// Start the Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


