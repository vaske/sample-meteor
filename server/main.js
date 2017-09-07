import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

	Messages = new Mongo.Collection("Messages", {});

	Meteor.methods({
	  addMessage(text) {
			let message = {
		  	time: new Date(),
		  	text: text,
			  userEmail:Meteor.user().emails[0].address
			};

			Messages.insert(message);
	  }
	});
});
