Meteor.publish('lunches', function(){
  return Lunches.find({employee: this.userId});
});
