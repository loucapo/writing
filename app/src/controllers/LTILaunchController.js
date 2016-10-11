
module.exports = function (koasend) {
  return {
    async launch(ctx) {
      
      ctx.redirect('/');
    }
  }
};