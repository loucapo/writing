module.exports = function (config) {
  return {
    launch: async function (ctx) {

      if(!ctx.cookies.get('wt_jwt')) {
        ctx.redirect('/instructor');
      }

      ctx.body = await ctx.render("index", {
        SPA_URL: config.app.spa_url
      });
    }
  };
};
