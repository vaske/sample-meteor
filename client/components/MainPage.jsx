MainPage = React.createClass({
    mixins: [ReactMeteorData],
    PropTypes: {
  
    },

    getMeteorData() {
        return {
          messages: Messages.find({}, {sort: {time: -1}}).fetch(),
          user: Meteor.user() 
        }
    },

    render() {
        if(this.data.user) {
            return (<MessageList />);
        } else {
            return (<Login />);
        }
    }
  });
  