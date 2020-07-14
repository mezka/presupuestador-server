const express = require('@feathersjs/express');
const feathers = require('@feathersjs/feathers')();
const PRESUPUESTADOR_PORT = process.env.PRESUPUESTADOR_PORT || 3000;

class ClientService {
    constructor() {
      this.clients = [];
    }
  
    async find () {
      return this.clients;
    }
  
    async create ({ name, address, phonenumber }) {
      const client = {
        id: this.clients.length,
        name,
        address,
        phonenumber
      }
  
      this.clients.push(client);

      console.log(client);
  
      return client;
    }
}

feathers.use('clients', new ClientService());

feathers.service('clients').on('created', client => {
console.log('A new client has been created', client);
});

const app = express(feathers);

// Parse HTTP JSON bodies
app.use(express.json());
// Parse URL-encoded params
app.use(express.urlencoded({ extended: true }));
// Add REST API support
app.configure(express.rest());
// Register an in-memory messages service
app.use('/clients', new ClientService());
// Register a nicer error handler than the default Express one
app.use(express.errorHandler());

app.listen(PRESUPUESTADOR_PORT).on('listening', () =>
  console.log(`Feathers server listening on localhost:${PRESUPUESTADOR_PORT}`)
);

const main = async () => {

    await feathers.service('clients').create({
        name: 'Emiliano Mesquita',
        address: 'Av Vergara 4775',
        phonenumber: 1540766551
    });

    const clients = await feathers.service('clients').find();

    console.log('All clients', clients);
};

main();