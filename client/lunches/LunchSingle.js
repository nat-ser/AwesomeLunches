
Template.LunchSingle.onCreated(function(){
  var self= this;
  self.autorun(function(){
    var id = FlowRouter.getParam('id');
    self.subscribe('LunchSingle', id);
  });
});
Template.LunchSingle.helpers({
  lunch: function(){
    var id = FlowRouter.getParam('id');
    return Lunches.findOne({_id: id});
  }
});
