injectTapEventPlugin();

var {
    RaisedButton,
    Paper,
    TextField,
    Styles,
    } = MUI;
var { ThemeManager, LightRawTheme } = Styles;
Login = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },
  mixins: [ReactMeteorData],
  getMeteorData(){
    return {
      currentUser: Meteor.user()
    }
  },
  getInitialState(){
    return {};
  },
  onSubmit(event) {
    event.preventDefault();
    var self = this;
    var data = $(event.target).serializeJSON();

    console.log(data);
    Meteor.loginWithPassword(data.username, data.password, function(err){
      if (err) {
        console.log(err);
        var message = err;
      } else {
        var message = 'You have successfully created an account. in a couple of minutes a mail will be sent to confirm your account.';
        FlowRouter.redirect('/');
      }
    });
    return false;
  },
  render(){
    return (
      <section className="container">
        <div className="row">
          <Paper zDepth={3} className="col s4 push-s4">
            <form id="login" onSubmit={this.onSubmit} style={{padding: '15px 10px' }}>
              <div className="row">
                <div id="signInInfo">
                    Sign in to <strong>Schedules.IO</strong> with your credentials.
                </div>
                <div className="input-field col s12">
                  <TextField id="username" type="text" name="username" floatingLabelText="Username or Email address" />
                </div>
                <div className="input-field col s12">
                  <TextField id="password" type="password" name="password" floatingLabelText="Password" />
                </div>
                <RaisedButton label="Login" type="submit" secondary={true} className="btn  btn-info" />
                <div className="forgotPassword"><a href="/forgotPassword">Did you forget your password?</a></div>
              </div>
            </form>
            <div className="thirdPartyLogin" style={{padding: '15px 10px' }}>
              <div className="row">
                <div className="thirdPartyInfo">
                  <div className="">Login via a third party.</div>
                  <RaisedButton label="Facebook" secondary={true} className="btn loginTP facebook" />
                  <div className="loginButtons">
                    <button className="btn loginTP Github">Github</button>
                    <button className="btn loginTP Google">Google+</button>
                    <button className="btn loginTP twitter">Twitter</button>
                  </div>
                  <div className="createAccount">New to <strong>Schedules.IO</strong>? <a href="/register">Create an account.</a></div>
                </div>
              </div>
            </div>
          </Paper>
        </div>
      </section>
    )
  }
});
