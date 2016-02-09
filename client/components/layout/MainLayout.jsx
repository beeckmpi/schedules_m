injectTapEventPlugin();

var {
    AppBar,
    Menu,
    FlatButton,
    Styles,
    RaisedButton,
    TextField,
    LeftNav,
    Popover,
    MenuItem,
    DatePicker,
    } = MUI;
let {SvgIcons} = MUI.Libs;
var { ThemeManager, LightRawTheme } = Styles;

MainLayout = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return {
      currentUser: Meteor.user()
    }
  },
  getInitialState() {
    return {popOver: false, leftNav: true}
  },
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },
  handleTouchTap(event) {
    this.setState({popOver:true, anchorEl: event.currentTarget});
  },
  handleRequestClose() {
    this.setState({popOver:false});
  },
  render(){
    let {currentUser} = this.data;
    let MenuStyle = {}
    return (
      <div>
        <AppBar
          title="Schedules.io"
          iconElementRight={
            <div style={{position: 'relative'}}>
              <FlatButton label={currentUser.username} onTouchTap={this.handleTouchTap} />
              <Popover
                open={this.state.popOver}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                onRequestClose={this.handleRequestClose}
              >
                <Menu style={MenuStyle}>
                  <MenuItem>Preferences</MenuItem>
                  <MenuItem>Sign Off</MenuItem>
                </Menu>
              </Popover>
          </div>
          }
        />
        <LeftNav open={this.state.open}>
          <AppBar title="Schedules.IO" showMenuIconButton={false} />
            <TextField hintText="Organisatie" />
        </LeftNav>
        <div style={{marginLeft: '270px'}}>{this.props.content}</div>
      </div>
    )
  }
});
