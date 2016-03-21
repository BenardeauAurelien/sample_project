'use strict';

class Client
{
  constructor()
  {
    ev.on('hour', (hour) => console.log(`il est ${hour} heure chez le client`));
  }
}

module .exports.Client = Client;