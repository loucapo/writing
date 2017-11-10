module.exports = function() {
  return function() {
    return async function(ctx, next) {
      if (!ctx.state || !ctx.state.jwtdata || !ctx.state.jwtdata.sub) {
        ctx.status = 401;
        ctx.body = {
          error: 'Unable to identify user. Missing or invalid authorization token.'
        };
      } else {
        ctx.state.user = {
          id: ctx.state.jwtdata.sub
        };
      }
      return next();
    };
  };
};
