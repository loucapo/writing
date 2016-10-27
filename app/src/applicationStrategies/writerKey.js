
module.exports = function (jsonwebtoken, config) {
  return {
    execute(ltiToken) {
      return jsonwebtoken.sign({
        IAM : ltiToken.user_id,
        firstName: ltiToken.lis_person_name_given,
        lastName: ltiToken.lis_person_name_family,
        email: ltiToken.lis_person_contact_email_primary,
        userType: ltiToken.roles[0] && ltiToken.roles[0].indexOf('Instructor') > -1 ? 'Instructor' : 'Student',
        title: ltiToken.context_title,
        abbreviation: ltiToken.context_label,
        courseId: ltiToken.resource_link_id
      }, config.app.consumer_secret);
    },
    launchPage: '/'
  }
};