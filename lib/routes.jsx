FlowRouter.route('/', {
  name: "Home",
  action(params) {
    renderMainLayoutWith(<Home />);
  }
});
FlowRouter.route('/login', {
  action(params) {
    renderMainLayoutWith(<Login />);
  }
});
FlowRouter.route('/register', {
  action(params) {
    renderMainLayoutWith(<Register />);
  }
});
FlowRouter.route('/user/preferences', {
  action(params) {
    renderMainLayoutWith(<Preferences />);
  }
});
FlowRouter.route('/user/preferences/notifications', {
  action(params) {
    renderMainLayoutWith(<Notifications />, document.getElementById('react-root'));
  }
});
FlowRouter.route('/user/preferences/password', {
  action(params) {
    renderMainLayoutWith(<Password />);
  }
});
FlowRouter.route('/user/preferences/picture', {
  action(params) {
    renderMainLayoutWith(<Picture />);
  }
})

function renderMainLayoutWith(component) {
  ReactLayout.render(MainLayout, {
    header: <Header />,
    content: component,
    footer: <Footer />
  });
}
