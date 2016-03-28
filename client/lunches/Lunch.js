Template.Lunch.onCreated(function(){
  this.editMode = new ReactiveVar(false);
});

Template.Lunch.helpers({
  updateLunchId: function(){
    return this._id;
  },
  editMode: function(){
    return Template.instance().editMode.get();
  }
});

Template.Lunch.events({
  'click .toggle-menu': function(){
    Meteor.call('toggleMenuItem', this._id, this.inMenu);
  },
  'click .fa-trash': function(){
    Meteor.call('deleteLunch', this._id);
  },
  'click .fa-pencil': function(event, template){
    template.editMode.set(!template.editMode.get());
  }
});
