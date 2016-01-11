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

    return (
      <section className="container">
        
       </section>
    )
  }
});
