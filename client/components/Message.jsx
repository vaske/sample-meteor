const createReactClass = require('create-react-class');

Message = createReactClass({
  propTypes: {
    message: React.PropTypes.object.isRequired
  },
  
  formatTime(time) {
    return moment(time).format('h:mm A');
  },
  
  render() {
    return (
      <li className="">{this.props.message.userEmail}<small>({this.formatTime(this.props.message.time)})</small> - {this.props.message.text}</li>
    );
  }
});
