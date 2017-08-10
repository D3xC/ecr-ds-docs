Template.docStats.helpers({
  now: function () {
    return new Date();
  },
  activeDoc: {
    title: function () { 
      var doc = Docs.findOne({ _id: Session.get('activeDocId') });
      return doc ? doc.title : 'Get Started';
    },
    source: function () {
      var doc = Docs.findOne({ _id: Session.get('activeDocId') });
      return doc ? doc.sharepointUrl || 'http://epicenter.epiqsystems.com/cr/dataservices/Shared%20Documents/Forms/AllItems.aspx' : 'http://epicenter.epiqsystems.com/cr/dataservices/Shared%20Documents/Forms/AllItems.aspx';
    },
    tags: function () {
      var doc = Docs.findOne({ _id: Session.get('activeDocId') });
      return doc ? doc.tags : [];
    }
  }
});