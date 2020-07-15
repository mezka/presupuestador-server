const data = require('./data/products.json')

class ProductService {
  constructor() {
    this.products = data.products;
  }

  async find () {
    return this.products;
  }

  async create ({ model, price }) {
    const product = {
      id: this.products.length,
      model,
      price
    }

    this.products.push(product);

    console.log(product);

    return product;
  }
}

module.exports = ProductService;