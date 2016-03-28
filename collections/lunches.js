Lunches = new Mongo.Collection('lunches');
Lunches.allow({
  insert: function(userId, doc){
    return !!userId;
  },
  update: function(userId, doc){
    return !!userId;
  }
});

Ingredient = new SimpleSchema({
  name:{
    type: String
  },
  amount: {
    type: String
  }
});

LunchSchema = new SimpleSchema({
  name: {
    type:String,
    label:"Name"
  },
  desc: {
    type: String,
    label: "Description"
  },
  ingredients: {
    type: [Ingredient]
  },
  inMenu: {
    type: Boolean,
    defaultValue: false,
    optional:true,
    autoform:{
      type:"hidden"
    }
  },
  employee: {
    type: String,
    label: "Author",
    autoValue: function(){
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function(){
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
  }
});

Meteor.methods({
    toggleMenuItem: function(id, currentState){
        Lunches.update(id, {
            $set: {
                inMenu: !currentState
            }
        });
    },
    deleteLunch: function(id){
        Lunches.remove(id);
    }
});

Lunches.attachSchema(LunchSchema);
