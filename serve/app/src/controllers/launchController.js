module.exports = function(config) {
  return {
    async launch(ctx) {
      //bounce to login page if cookie not set
      //XXX probably want to move this to middleware
      if (!ctx.cookies.get('id_token')) {
        ctx.redirect('/login');//XXX need to pull this out into a config
      }
      //give them the SPA
      ctx.body = await ctx.render('index', {
        SPA_URL: config.app.spa_url
      });
    },

    async fourOhFour(ctx) {
      ctx.status = 404;
      ctx.body = await ctx.render('fourOhFour');
    }
  };
};
