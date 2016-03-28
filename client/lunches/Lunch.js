Template.Lunch.helpers({
  updateLunchId: function(){
    return this._id;
  }
});

Template.Lunch.events({
  'click .toggle-menu': function(){
    Meteor.call('toggleMenuItem', this._id, this.inMenu);
  }
});
