if(Meteor.isClient){
    Accounts.onLogin(function(){
        FlowRouter.go('lunch-box');
    });

    Accounts.onLogout(function(){
        FlowRouter.go('home');
    });
}

// FlowRouter.triggers.enter([function(context,redirect){
//     if(!Meteor.userId()){
//         FlowRouter.go('home');
//     }
// }]);

FlowRouter.route("/", {
  name: 'home',
  action(){
    if (Meteor.userId()) {
      FlowRouter.go("lunch-box");
    }
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
  name: 'lunch',
  action(){
    BlazeLayout.render('MainLayout', {main: 'LunchSingle'});
  }
});

FlowRouter.route("/menu", {
  name: 'menu',
  action(){
    BlazeLayout.render('MainLayout', {main: 'Menu'});
  }
});

FlowRouter.route("/shopping-list", {
  name: 'shopping-list',
  action(){
    BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
  }
});
