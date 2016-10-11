
module.exports = function(paperslti,
                          koapapers,
) {

  var serialize = function (user) {
    return user;
  };

  var deserialize = function (user) {
    return user;
  };

  var authLocalUser = async function(req, payload) {
    return payload;
  };

  var ltiStrategy = paperslti(authLocalUser, {
    consumerKey: 'key',
    consumerSecret: 'secret'
  });
  var config = {
    strategies: [ltiStrategy],
    useSession: true,
    serializers: [serialize],
    deserializers: [deserialize]
  };

  return koapapers().registerMiddleware(config);
};
