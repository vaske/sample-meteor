import tether from 'tether';
global.Tether = tether;

bootstrap = require('bootstrap');

Messages = new Mongo.Collection("Messages", {});

if (Meteor.isClient) {
  Meteor.startup(function () {
      ReactDOM.render(<MessageList />, document.getElementById("app"));
  });
}
