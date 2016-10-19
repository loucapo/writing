
module.exports = function(papersjwt,
                          koapapers,
                          config
) {

  var authLocalUser = async function(token) {
    return token;
  };
  var jwtStrategy = papersjwt.Strategy(authLocalUser, {
    secretOrKey: config.app.jwt_secret,
    jwtFromRequest: papersjwt.ExtractJwt.fromAuthHeaderWithScheme('bearer')
  });
  var papersConfig = {
    strategies: [jwtStrategy]
  };

  return koapapers().registerMiddleware(papersConfig);
};
