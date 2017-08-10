Meteor.methods({
  setSideMenu: function (menuItem) {
    if (Meteor.isClient) {
      Session.set('menuTitle', menuItem);
      // Session.set('icon', 'icon ' + menuIcon);
    }   
  },
});
