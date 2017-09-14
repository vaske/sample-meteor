import tether from 'tether';
global.Tether = tether;
import Popper from 'popper.js';
window.Popper = Popper;

bootstrap = require('bootstrap');

Messages = new Mongo.Collection("Messages", {});

if (Meteor.isClient) {
  Meteor.subscribe('lists');

  Meteor.startup(function () {
      ReactDOM.render(<MainPage />, document.getElementById("app"));
  });
}


