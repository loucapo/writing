
module.exports = function (superagent, jsonwebtoken, config) {
  return {
    index: async function (ctx) {
      const values = jsonwebtoken.verify(ctx.state.user.token,config.app.consumer_secret);
// XXX this is bad
//      await superagent
//        .post(`${config.app.wk_api_url}/CreateInstructorAndCourse`)
//        .set('Content-Type', 'application/json')
//        .send(JSON.stringify(values));

      ctx.body = await ctx.render("index", {
        SPA_URL: config.app.spa_url,
        token: ctx.state.user.token
      });
    }
  };
};
