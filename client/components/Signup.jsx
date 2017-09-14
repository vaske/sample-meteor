Signup = React.createClass({
  onSubmit(event) {
      event.preventDefault();

      var email = $(event.target).find("[name=email]").val();
      var password = $(event.target).find("[name=password]").val();

      Meteor.call('register', {email: email, password: password}, (err) => {
          if (err) {
              console.log('error', err);
          } else {
              FlowRouter.go('Home');
          }
      });
  },
  render() {
      return (
          <div className="container">
              <div className="row">
                  <div className="col-sm-6 col-sm-offset-3">
                      <h1>Register</h1>

                      <form onSubmit={this.onSubmit}>
                          <div className="form-group">
                            <input name="email" type="text" label="Email" className="form-control" placeholder="enter email..."/>
                          </div>
                          <div className="form-group">
                            <input name="password" type="password" label="Password" className="form-control" placeholder="enter password..."/>
                          </div>
                          <input type="submit" className="btn btn-default" value="Signup"/>
                      </form>
                  </div>
              </div>
          </div>
      )
  }
});
