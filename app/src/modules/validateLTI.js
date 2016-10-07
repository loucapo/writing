var lti = require('ims-lti');
var ltiCredentials = {'key': 'secret'};

module.exports = function (imslti) {
  return function (req) {

    const submittedConsumerKey = req.body.oauth_consumer_key || '';
    const consumerSecret = ltiCredentials[submittedConsumerKey];

    if (!consumerSecret) {
      return false;
    }
    const provider = new imslti.Provider(submittedConsumerKey, consumerSecret);
    return provider.valid_request(req, (err, isValid) => { return isValid; });
  }
};

