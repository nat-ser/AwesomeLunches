Lunches = new Meteor.Collection('recipes');

LunchSchema = new SimpleSchema({
  name: {
    type:String,
    label:"Name"
  },
  desc: {
    type: String,
    label: "Description"
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

Lunches.attachSchema(LunchSchema);
