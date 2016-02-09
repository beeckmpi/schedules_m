injectTapEventPlugin();

var {
    RaisedButton,
    Paper,
    TextField,
    Styles,
    } = MUI;
var { ThemeManager, LightRawTheme } = Styles;
Password = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return {
      currentUser: Meteor.user()
    }
  },
  getInitialState(){
    return {hideInput: true};
  },
  onClick: function() {
        this.setState({ hideInput: false });
    },
  handleLogout(){
    Meteor.Logout;
  },
  selectTimezone(hours){
    var d = new Date();
    var timezone = d.getTimezoneOffset();
    if ((hours*60)==timezone){
      return 'selected';
    } else {
      return '';
    }
  },
  render(){
    let {currentUser} = this.data;

    return (
      <Paper className="container row" style={{margin: "10px auto", padding: '15px 0px'}}>
        <section className="col s12 m4">
            <h5>User preferences</h5>
            <div className="collection">
              <a href="/user/preferences" className="collection-item">Account<i className="glyphicon glyphicon-menu-right"></i></a>
              <a href="/user/preferences/notifications" className="collection-item">Notications<i className="glyphicon glyphicon-menu-right"></i></a>
              <a href="/user/preferences/password" className="collection-item active">Password<i className="glyphicon glyphicon-menu-right"></i></a>
              <a href="/user/preferences/picture" className="collection-item">Picture<i className="glyphicon glyphicon-menu-right"></i></a>
            </div>
        </section>
        <section className="PreferencesContent col s12 m8">
          <div>
            <form id="account"  onSubmit={this.onSubmit}>
              <h5>Password</h5>
              <h6>Change your password</h6>
                <div className="input-field">
                  <input type="Password" name="oldPassword"  className="validate"></input>
                  <label for="oldPassword" style={{left: '0px'}}>Current Password</label>
                </div>
                <div className="input-field">
                  <input type="Password" name="newPassword" className="validate"></input>
                  <label for="newPassword" style={{left: '0px'}}>New Password</label>
                </div>
                <div className="input-field">
                  <input type="Password" name="repeatPassword" className="validate"></input>
                  <label for="repeatPassword" style={{left: '0px'}}>Repeat new Password</label>
                </div>
                <div className="form-item">
                  <label></label>
                  <input type="submit" className="btn btn-info" value="Change Password"></input>
                </div>
            </form>
          </div>
        </section>
      </Paper>
    )
  }
});
