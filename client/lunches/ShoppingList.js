Template.ShoppingList.onCreated(function(){
  var self= this;
  self.autorun(function(){
    self.subscribe('lunches');
  });
});
Template.ShoppingList.helpers({
    shoppingList: function(){
    return Lunches.find({inMenu: true});
  }
});
