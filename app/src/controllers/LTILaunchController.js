
module.exports = function (applicationStrategies) {
  return {
    async launch(ctx) {
      // var strategy = applicationStrategies[ctx.param.app];
      var strategy = applicationStrategies['writerKey'];
      const jwt = strategy.execute(ctx.state.user);
      ctx.session.papers = {user: {token:jwt}};
      ctx.redirect(strategy.launchPage);
    }
  }
};