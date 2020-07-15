const PRESUPUESTADOR_PORT = process.env.PRESUPUESTADOR_PORT || 3000;

const express = require('@feathersjs/express');
const feathers = require('@feathersjs/feathers')();
const ClientService = require('./services/ClientService');
const ProductService = require('./services/ProductService');


feathers.use('clients', new ClientService());
feathers.use('products', new ProductService());

feathers.service('clients').on('created', client => {
console.log('A new client has been created', client);
});

feathers.service('products').on('created', client => {
  console.log('A new product has been created', client);
});
  

const app = express(feathers);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());

app.use('/clients', new ClientService());
app.use('/products', new ProductService());

app.use(express.errorHandler());

app.listen(PRESUPUESTADOR_PORT).on('listening', () =>
  console.log(`Feathers server listening on localhost:${PRESUPUESTADOR_PORT}`)
);