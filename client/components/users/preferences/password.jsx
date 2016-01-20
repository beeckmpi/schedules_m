Password = React.createClass({
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
    let {currentUser} = this.data;

    return (
      <section className="container">
        <aside className="left">
          <div className="preferencesMenu">
            <h3>User preferences</h3>
            <ul>
              <li><a href="/user/preferences">Account<i className="glyphicon glyphicon-menu-right"></i></a></li>
              <li><a href="/user/preferences/notifications">Notications<i className="glyphicon glyphicon-menu-right"></i></a></li>
              <li className="active"><a href="/user/preferences/password">Password<i className="glyphicon glyphicon-menu-right"></i></a></li>
              <li><a href="/user/preferences/picture">Picture<i className="glyphicon glyphicon-menu-right"></i></a></li>
            </ul>
          </div>
        </aside>
        <section className="PreferencesContent">
          <div>
            <form id="account">
              <h3>Password</h3>
              <h5>Change your password</h5>
                <div className="form-item">
                  <label for="oldPassword">Current Password</label>
                  <input type="Password" name="oldPassword" placeholder="Current Password"></input>
                  <div className="form-information">The password you have been using.</div>
                </div>
                <div className="form-item">
                  <label for="newPassword">New Password</label>
                  <input type="Password" name="newPassword" placeholder="New Password"></input>
                  <div className="form-information">The password you want to be using.</div>
                </div>
                <div className="form-item">
                  <label for="repeatPassword">Repeat new Password</label>
                  <input type="Password" name="repeatPassword" placeholder="Repeat new Password"></input>
                  <div className="form-information">The password you want to be using, again...</div>
                </div>
                <div className="form-item">
                  <label></label>
                  <input type="submit" className="btn btn-info" value="Change Password"></input>
                </div>
            </form>
          </div>
        </section>
      </section>
    )
  }
});
