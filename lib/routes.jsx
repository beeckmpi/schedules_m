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
})

function renderMainLayoutWith(component) {
  ReactLayout.render(MainLayout, {
    header: <Header />,
    content: component,
    footer: <Footer />
  });
}
