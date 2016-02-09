injectTapEventPlugin();

var {
    RaisedButton,
    Paper,
    TextField,
    Styles,
    } = MUI;
var { ThemeManager, LightRawTheme } = Styles;
Home = React.createClass({
  mixins: [ReactMeteorData],
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },
  getMeteorData(){
    return {
      currentUser: Meteor.user()
    }
  },
  getInitialState(){
    return {};
  },
  handleLogout(){
    Meteor.Logout;
  },
  render(){
    let {currentUser} = this.data;
    if (currentUser != undefined) {
      var organisation = <RaisedButton secondary={true} label="Add organisation" />
    } else {
      var organisation = <RaisedButton secondary={true} label="Add organisation" />
    }

    return (
      <section className="row">
          <aside className="col m2" style={{padding: '10px 8px'}}>
            <Paper className="organisation" style={{padding: '10px 8px', height: '80%'}}>
              <h5>Organisations</h5>
              {organisation}
            </Paper>
          </aside>
      </section>
    )
  }
});
