MessageList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      messages: Messages.find({}, {sort: {time: -1}}).fetch() 
    }
  },
  
  renderMessages() {
    return this.data.messages.map((message) => {
      return <Message key={message._id} message={message} />;
    });
  },

  handleSubmit(event) {
    event.preventDefault();
    
    let message = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

	  // send message to BE
    Meteor.call("addMessage", message);

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
    return (
      <div className="container">
        <header>
          <h2>Chat Messages</h2>
        </header>
        
        {this.renderForm()}

        <ul>
          {this.renderMessages()}
        </ul>

      </div>
    );
  }
});
