/**
 * Created by wayneng on 10/25/16.
 */
var Page = require('marvin-js').Page;

module.exports = new Page({

  // XXX placeholder
  url: { value: ':8081/course/view.php?id=2' },

  test_lti_link: { get: function () { return this.element('a[href*="/mod/lti/view.php"]');}},
});
