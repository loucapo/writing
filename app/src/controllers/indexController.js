
module.exports = function (config) {

  return {
    index: async function (ctx) {
      if(!ctx.cookies.get('wt_jwt')){
        ctx.redirect('/instructor');
      }
      ctx.body = await ctx.render("index", {
        SPA_URL: config.app.spa_url,
        token: ctx.cookies.get('wt_jwt') 
      });
    }
  };
};
