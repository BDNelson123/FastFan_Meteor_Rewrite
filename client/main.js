// client/main.js
Template.content.helpers({
  currentPage: function (type) {
    var thePage = Session.get("currentPage");
    return thePage === type;
  }
});
