module.exports = function(koasend) {
  return {
    async index(ctx) {
      await koasend(ctx, 'app/src/views/index.html');
    }
  };
};
