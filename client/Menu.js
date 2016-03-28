Template.Menu.onCreated(function(){
  var self= this;
  self.autorun(function(){
    self.subscribe('lunches');
  });
});
Template.Menu.helpers({
  lunches: function(){
    return Lunches.find({inMenu: true});
  }
});
