/**
 * Created by wayneng on 10/25/16.
 */
var Page = require('marvin-js').Page;

module.exports = new Page({

  // XXX placeholder
  url: { value: '/course/view.php?id=2' },

  moodle_username: { get: function () { return this.element("[id='username']"); } },
  moodle_password: { get: function () { return this.element("[id='password']"); } },
  moodle_login: { get: function () { return this.element("[id='loginbtn']"); } },

  lti_link: { get: function () { return this.element(".activityinstance");}},
});
