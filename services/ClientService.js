const data = require('./data/clients.json');

class ClientService {
  constructor() {
    this.clients = data.clients;
  }

  async find () {
    return this.clients;
  }

  async create (data) {

    const client = {
      id: this.clients.length,
      name: data.name,
      address: data.address,
      email: data.email,
      phonenumber: data.phonenumber
    };

    this.clients.push(client);
    return client;
  }
}

module.exports = ClientService;