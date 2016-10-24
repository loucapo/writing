
module.exports = function(papersjwt,
                          koapapers
) {

  var authLocalUser = async function(token) {
    return token;
  };
  var jwtStrategy = papersjwt.strategy(authLocalUser, {
    secretOrKey: 'fu',
    jwtFromRequest: papersjwt.ExtractJwt.fromAuthHeaderWithScheme('bearer')
  });
  var config = {
    strategies: [jwtStrategy]
  };

  return koapapers().registerMiddleware(config);
};
