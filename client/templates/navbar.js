Template.navbar.helpers({
  navbarItems: function () {
    return Categories.find();
  }
});

Template.navbar.events({
  'click .menu-item'(event) { 
    event.preventDefault();
    var menu = event.target.text;
    Meteor.call('setSideMenu', menu);
    Session.set('activeCategoryId', event.target.attributes.id.value);
  },
});