import { Meteor } from 'meteor/meteor';
Meteor.startup(() => {
  
});

Meteor.methods({
  getContent: function (file) {
    var content = Assets.getText('content/' + file);
    return content;
  }
});
