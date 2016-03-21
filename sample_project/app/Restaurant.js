'use strict';

module.exports = class Restaurant
{
  constructor(ev)
  {
    ev.on('hour', (hour) => console.log(`il est ${hour} heure au restaurant`));
  }

  allerAuMarcher()
  {
    console.log("Moi, le restaurant, je peux aller au marcher");
  }
}

