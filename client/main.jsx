import tether from 'tether';
global.Tether = tether;

bootstrap = require('bootstrap');

Messages = new Mongo.Collection("Messages", {});

if (Meteor.isClient) {
  Meteor.subscribe('lists');

  Meteor.startup(function () {
      ReactDOM.render(<MainPage />, document.getElementById("app"));
  });
}


