var Page = require('marvin-js').Page;

module.exports = new Page({

  url: { value: ':8081/login/index.php' },

  moodle_username: { get: function () { return this.element("[id='username']"); } },
  moodle_password: { get: function () { return this.element("[id='password']"); } },
  moodle_login: { get: function () { return this.element("[id='loginbtn']"); } },

});
