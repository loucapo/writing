
module.exports = function(paperslti,
                          paperslocal,
                          koapapers) {

  var serialize = function (user) {
    return user;
  };

  var deserialize = function (user) {
    return user;
  };

  var authLocalUser = function(username, password) {
    return {something:'something'};
  };

  var local = paperslocal(authLocalUser);
  var config = {
    strategies: [local],
    useSession: true,
    serializers: [serialize],
    deserializers: [deserialize]
  };

  return koapapers().registerMiddleware(config);
};
