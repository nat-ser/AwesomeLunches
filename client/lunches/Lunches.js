
Template.Lunches.onCreated(function(){
  var self= this;
  self.autorun(function(){
    self.subscribe('lunches');
  });
});
Template.Lunches.helpers({
  lunches: ()=> {
    return Lunches.find({});
  }
});
