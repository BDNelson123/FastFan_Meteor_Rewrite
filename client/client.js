Template.header.events({
  'click #btnLogOut': function (event, template) {
    if (Meteor.userId()) {
      Meteor.logout();
    } else {
      var userName = template.find('#username').value,
        userPassword = template.find('#password').value;
        Meteor.loginWithPassword(userName, userPassword, function (error) {
        if (error) {
          alert("Your username or password is incorrect.  Please try again.");
        }
      });
    }
  }
});

Template.homecontent.events({
  'click #btnCreateAccount': function (event, template) {
    var userEmail = template.find('#email').value,
      userName  = template.find('#newusername').value,
      password  = template.find('#newpassword').value,
      password2 = template.find('#password2').value,
      name      = template.find('#fullname').value;
 
    Accounts.createUser({
      username: trimInput(userName),
      email:    trimInput(userEmail),
      password: password,
      profile: {
        name: trimInput(name)
      }
    }, function (error) {
      if (error) {
        alert("Cannot create user");
      }
    });
  }
});

// This sanitizes input
var trimInput = function(val) {
  return val.replace(/^\s*|\s*$/g, "");
}
