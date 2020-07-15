const data = require('./data/clients.json');

class ClientService {
  constructor() {
    this.clients = data.clients;
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

module.exports = ClientService;