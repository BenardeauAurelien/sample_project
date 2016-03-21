'use strict';

var Rungis = require('./Rungis.js');
var Restaurant = require('./Restaurant.js');
var marcherEstIlOuvert = false;

const EventEmitter = require('events').EventEmitter;
const ev = new EventEmitter();
const interv = setInterval(() => ev.emit('hour', i++ % 24), 1000);
let i = 0;

var rungis = new Rungis(ev);
var restaurant = new Restaurant(ev);

ev.on('hour', (hour) => {
  if(hour>=5 && hour<=14){
    marcherEstIlOuvert = rungis.marcheOuvert();
    console.log(marcherEstIlOuvert);
  }
  else{
    marcherEstIlOuvert = false
  }
  if(marcherEstIlOuvert){
    restaurant.allerAuMarcher();
  }
});

setTimeout(() => clearInterval(interv), 48000);