
module.exports = function (koasend) {
  return {
    async launch(ctx) {
      
      console.log('==========ctx.isAuthenticated()=========');
      console.log(ctx.isAuthenticated());
      console.log(ctx.request.user);
      console.log(ctx.session);

      console.log('==========END ctx.isAuthenticated()=========');
      // ctx.status = 200;
      ctx.redirect('/');
    }
  }
};