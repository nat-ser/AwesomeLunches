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
FlowRouter.route("/lunch/:id", {
  name: 'lunch-box',
  action(){
    BlazeLayout.render('MainLayout', {main: 'LunchSingle'});
  }
});
