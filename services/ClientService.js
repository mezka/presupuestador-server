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
      address0: data.address0,
      email0: data.email0,
      phonenumber0: data.phonenumber0
    };

    this.clients.push(client);
    return client;
  }
}

module.exports = ClientService;