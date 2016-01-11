Header = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return {
      currentUser: Meteor.user()
    }
  },
  handleLogout(){
    Meteor.Logout;
  },
  render(){
    let loginButton;
    let {currentUser} = this.data;
    if(currentUser) {
      loginButton = <li><a href="#" onClick={ this.handleLogout }>log out</a></li>
    } else {
      loginButton = <li><a href="/login">Login</a></li>
    }
    return (
      <nav>
        <div className="">
          <ul id="nav-mobile" className="right">
            { loginButton }
          </ul>
          <a href="/" className="brand-logo">Schedules.IO</a>
        </div>
      </nav>
    )
  }
});
