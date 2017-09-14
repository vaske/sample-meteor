var ReactDOM = require('react-dom')

FlowRouter.route("/", {
    name: "Home",
    action(params) {
        ReactLayout.render(MainPage);
    }
});

FlowRouter.route("/login", {
    name: "Login",
    action(params) {
        ReactLayout.render(Login);
    }
});

FlowRouter.route("/signup", {
    name: "Signup",
    action(params) {
        ReactLayout.render(Signup);
    }
});