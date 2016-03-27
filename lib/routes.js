FlowRouter.route("/", {
  name: 'home',
  action(){
    BlazeLayout.render('HomeLayout');
  }
});
FlowRouter.route("/lunch-box", {
  name: 'lunch-box',
  action(){
    BlazeLayout.render('MainLayout', {main: 'Lunches'});
  }
});
