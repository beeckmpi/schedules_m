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
})

function renderMainLayoutWith(component) {
  ReactLayout.render(MainLayout, {
    header: <Header />,
    content: component,
    footer: <Footer />
  });
}
