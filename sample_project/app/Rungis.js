'use strict';

module.exports = class Rungis
{
  constructor(ev)
  {
    this.ev = ev;
    console.log("bonjour");
    ev.on('hour', (hour) => console.log(`il est ${hour} heure au marche`));
  }

  marcheOuvert()
  {
    console.log("ok marche ouvert");
    return true;
  }
}