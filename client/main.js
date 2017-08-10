import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';

import './main.html';

Template.body.onCreated(function () {
  // _.each(ECRData.docs, function (doc) {
  //   Meteor.call('getContent', doc.file, function (error, result) {
  //     if (error) {
  //       console.log('body.onCreated - getContent Error: ' + error);
  //     } else {
  //       console.log('body.onCreated - getContent Result: ' + error);
  //       doc.content = result;
  //       var docId = Docs.insert(doc);
  //       console.log('docId: ' + docId);
  //     }
  //   });
  // });
});