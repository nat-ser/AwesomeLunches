Meteor.publish('lunches', function(){
  return Lunches.find({employee: this.userId});
});

Meteor.publish('LunchSingle', function(id){
  return Lunches.find({_id: id});
});
