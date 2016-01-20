Picture = React.createClass({
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
              <li><a href="/user/preferences/password">Password<i className="glyphicon glyphicon-menu-right"></i></a></li>
              <li className="active"><a href="/user/preferences/picture">Picture<i className="glyphicon glyphicon-menu-right"></i></a></li>
            </ul>
          </div>
        </aside>
        <section className="PreferencesContent">
          <div>
            <form id="account">
              <h3>Picture</h3>
              <h5>Change or edit your profile picture</h5>
              
            </form>
          </div>
        </section>
      </section>
    )
  }
});
