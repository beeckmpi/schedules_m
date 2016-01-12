Login = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return {
      currentUser: Meteor.user()
    }
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
        redirect('/');
      }
    });
    return false;
  },
  render(){
    return (
      <section className="container-wrapper">
        <form id="login" className="col s4" onSubmit={this.onSubmit}>
          <div className="row">
            <div id="signInInfo">
                Sign in to <strong>Schedules.IO</strong> with your credentials.
            </div>
            <div className="input-field col s12">
              <input id="username" type="text" name="username" placeholder="Username or Email address" className="validate" />
            </div>
            <div className="input-field col s12">
              <input id="password" type="password" name="password" placeholder="Password" className="validate" />
            </div>
            <button type="submit" className="btn  btn-info">Login</button>
            <div className="forgotPassword"><a href="/forgotPassword">Did you forget your password?</a></div>
          </div>
        </form>
        <div className="thirdPartyLogin">
          <div className="row">
            <div className="thirdPartyInfo">
              <div className="">Login via a third party.</div>
              <button className="btn loginTP facebook">Facebook</button>
              <div className="loginButtons">
                <button className="btn loginTP Github">Github</button>
                <button className="btn loginTP Google">Google+</button>
                <button className="btn loginTP twitter">Twitter</button>
              </div>
              <div className="createAccount">New to <strong>Schedules.IO</strong>? <a href="/register">Create an account.</a></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
});
