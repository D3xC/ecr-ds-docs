Template.sidebar.helpers({
  icon: function () {
    var category = Categories.findOne({ _id: Session.get('activeCategoryId') });
    var icon = category ? category.icon : 'build'
    return icon;
  },
  sideMenuTitle: function () {
    return Session.get('menuTitle');
  },
  docItems: function () {
    return Docs.find({category: Session.get('menuTitle')})
  },
});

Template.sidebar.onCreated(function () {
  Session.set('menuTitle', 'Foundations');
  Session.set('activeCategoryId', 'BTgtuwSkJtW72grLs');
  Session.set('icon', 'icon configure');
});

Template.sidebar.events({
  'click .doc-item'(event) {
    event.preventDefault();
    Session.set('activeDocId',event.target.attributes.id.value);
  }
});

Template.sidebar.onRendered(function () { 

});
