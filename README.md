# Product Search Engine

## Overview

This project consists of a product search engine built using Node.js, Express, and MongoDB. It features an advanced search API that allows filtering products by price range, creation date, name, and stock range. The project also includes a basic Express frontend to demonstrate the API's capabilities.

## Features

- Advanced search API for products.
- Filters for price, date, name (contains), and stock.
- Simple Express frontend for demonstrating API usage.
- Clean and modular code structure.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS for frontend templating

## Getting Started

### Prerequisites

- Node.js
- MongoDB instance (local or remote)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/davidhernandezeverdax/basic-product-search-engine.git

2. Navigate to the project directory:
   ```bash
   cd api-books

3. Install dependencies:
   ```bash
   npm install

4. Set up your MongoDB connection string in app.js:
   ```bash
   mongoose.connect('your-connection-mongodb')

5. Start the server:
    node src/app.js
   
### API Endpoints
GET /api/products: Retrieves the list of products with optional filters.

### Frontend
Access the frontend by navigating to http://localhost:3000 on your browser. Use the search form to test different filters and view the results.
