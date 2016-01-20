Register = React.createClass({
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
    data.profile = {};
    data.profile.first_name = data.first_name;
    data.profile.last_name = data.last_name;
    delete data.first_name, data.last_name;
    console.log(data);
    Accounts.createUser(data, function(err){
      if (err) {
        console.log(err);
        var message = err;
      } else {
        var message = 'You have successfully created an account. in a couple of minutes a mail will be sent to confirm your account.';
      }
    });
    return false;
  },
  render(){
    var message = '';
    return (
      <section className="container-wrapper">
        <form id="register" className="col s4" onSubmit={this.onSubmit}>
          <div className="row">
            <div id="signInInfo">
                Create an account for <strong>Schedules.IO</strong> with your credentials.
            </div>
            <div id="message">{message}</div>
            <div className="input-field col s12">
              <input id="username" name="username" type="text" placeholder="Username" className="validate" />
            </div>
            <div className="input-field col s12">
              <input id="email" name="email" type="Email" placeholder="Email address" className="validate" />
            </div>
            <div className="input-field col s12">
              <input id="first_name" name="first_name" type="text" placeholder="First Name" className="validate" />
            </div>
            <div className="input-field col s12">
              <input id="last_name" name="last_name" type="text" placeholder="Last name" className="validate" />
            </div>
            <div className="input-field col s12">
              <input id="password" name="password" type="password" placeholder="Password" className="validate" />
            </div>
            <div className="input-field col s12">
              <input id="repeat_password" name="repeat_password" type="password" placeholder="Repeat your password" className="validate" />
            </div>
            <button type="submit" className="btn btn-info">Create account</button>
          </div>
        </form>
      </section>
    )
  }
});
