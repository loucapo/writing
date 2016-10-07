
module.exports = function (validateLTI, koasend) {
  return {
    async launch(ctx) {
      if(validateLTI(ctx.request)){
        await koasend(ctx, 'app/src/views/index.html');
      }
    }
  }
};