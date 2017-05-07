var Page = require('marvin-js').Page;

module.exports = new Page({

  url: { value: ':8081/login/index.php' },
  instructor_cookie_route: { value: '/instructor' },
  student_cookie_route: { value: '/student' },
  admin_cookie_route: { value: '/admin' },

  sls_username: { get: function () { return this.element("[id='username']"); } },
  sls_password: { get: function () { return this.element("[id='password']"); } },
  sls_login: { get: function () { return this.element("[id='loginbtn']"); } },

  sls_admin_username: { value: 'ttwnadmin' },
  sls_teacher_username: { value: 'ttwnteacher' },
  sls_student_username: { value: 'ttwnstudent' },
  sls_dev_password: { value: 'Passw0rd!' },

});