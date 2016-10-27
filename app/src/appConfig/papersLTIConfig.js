
module.exports = function(paperslti,
                          koapapers,
                          config) {

  var authLocalUser = function(req, payload) {
    return payload;
  };

  var ltiStrategy = paperslti(authLocalUser, {
    consumerKey: config.app.consumer_key,
    consumerSecret: config.app.consumer_secret
  });
  var config = {
    strategies: [ltiStrategy]
  };

  return koapapers().registerMiddleware(config);
};
