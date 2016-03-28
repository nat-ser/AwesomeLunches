
Template.LunchSingle.onCreated(function(){
  var self= this;
  self.autorun(function(){
    self.subscribe('lunches');
  });
});
Template.LunchSingle.helpers({
  lunch: ()=> {
    var id = FlowRouter.getParam('id');
    return Lunches.findOne({_id: id});
  }
});
