Home = React.createClass({
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
    if (currentUser != undefined) {
      var organisation = 'list organisation';
    } else {
      var organisation = <div><i class="glyphicon glyphicon-plus"></i> Add organisation</div>
    }

    return (
      <section className="container">
          <aside className="left">
            <div class="orgination">
              {organisation}
            </div>
          </aside>
      </section>
    )
  }
});
