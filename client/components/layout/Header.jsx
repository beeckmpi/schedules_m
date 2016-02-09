injectTapEventPlugin();

var AppBar = MUI;
Header = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return {
      currentUser: Meteor.user()
    }
  },
  handleLogout(){
    Meteor.logout();
  },
  render(){

  }
});
