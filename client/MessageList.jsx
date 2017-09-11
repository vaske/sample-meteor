
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';

import { createContainer } from 'meteor/react-meteor-data';

MessageList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      messages: Messages.find({}, {sort: {time: -1}}).fetch(),
      user: Meteor.user() 
    }
  },
  
  renderMessages() {
    return this.data.messages.map((message) => {
      return <Message key={message._id} message={message} />;
    });
  },

  handleSubmit(e) {
    e.preventDefault();
    
    let message = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

	  // send message to BE
    //Meteor.call("addMessage", message);
    Meteor.subscribe('addMessagePublish', message);

    ReactDOM.findDOMNode(this.refs.textInput).value = "";
  },

  renderForm() {
    return <form onSubmit={this.handleSubmit} >
      <input
        type="text"
        ref="textInput"
        name="message"
        placeholder="Enter message..." />
    </form>
  },

  render() {
      let page;
      if(this.data.user)
        page =
        <div className="container">
          <header>
            <h2>Chat Messages</h2>
          </header>
          <LoginButtons />
          {this.renderForm()}

          <ul>
            {this.renderMessages()}
          </ul>

        </div>;
    else 
      page = 
      <div className="container">
        <header>
          <h2>Chat Messages</h2>
        </header>
        <LoginButtons/>
        Please login!
      </div>;      
    
    return (page);
  }
});
