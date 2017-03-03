module.exports = function (config) {
  return {
    launch: async function (ctx) {
      ctx.body = await ctx.render("index", {
        SPA_URL: config.app.spa_url,
        token: ctx.cookies.get('wt_jwt')
      });
    }
  };
};
