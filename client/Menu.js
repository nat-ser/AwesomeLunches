Template.Menu.onCreated(function(){
  var self= this;
  self.autorun(function(){
    self.subscribe('lunches');
  });
});
Template.Menu.helpers({
  lunches: ()=> {
    return Lunches.find({inMenu: true});
  }
});
