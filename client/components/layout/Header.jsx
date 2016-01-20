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
    let loginButton;
    let {currentUser} = this.data;
    if(currentUser) {
      loginButton =
        <li className="username">
          <a href="/user/me">{currentUser.profile.first_name} {currentUser.profile.last_name}</a>
            <div className="popupMenu below">
              <ul>
                <li>
                  <a href="/user/preferences">Preferences</a>
                </li>
                <li>
                  <a href="#" onClick={ this.handleLogout }>Logout</a>
                </li>
              </ul>
            </div>
        </li>
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
