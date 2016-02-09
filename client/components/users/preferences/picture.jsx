injectTapEventPlugin();

var {
    RaisedButton,
    Paper,
    TextField,
    Styles,
    } = MUI;
var { ThemeManager, LightRawTheme } = Styles;
Picture = React.createClass({
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
        <div className="col s12 m4">
            <h5>User preferences</h5>
            <div className="collection">
              <a href="/user/preferences" className="collection-item">Account<i className="glyphicon glyphicon-menu-right"></i></a>
              <a href="/user/preferences/notifications" className="collection-item">Notications<i className="glyphicon glyphicon-menu-right"></i></a>
              <a href="/user/preferences/password" className="collection-item">Password<i className="glyphicon glyphicon-menu-right"></i></a>
              <a href="/user/preferences/picture" className="collection-item active">Picture<i className="glyphicon glyphicon-menu-right"></i></a>
            </div>
        </div>
        <section className="PreferencesContent col s12 m8">
          <div>
            <form id="account">
              <h5>Picture</h5>
              <h6>Change or edit your profile picture</h6>

            </form>
          </div>
        </section>
      </Paper>
    )
  }
});
