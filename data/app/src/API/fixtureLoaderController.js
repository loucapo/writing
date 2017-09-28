module.exports = function(loadFixture) {
  return {
    async fixtureLoad(ctx) {
      let res = await loadFixture(ctx.params.data);
      if (res === undefined) {
        ctx.status = 404;
        ctx.body = `No fixture found named ${ctx.params.data}`;
      } else if (!res) {
        ctx.status = 500;
        ctx.body = `BAD THINGS`;
      } else {
        ctx.status = 200;
        ctx.body = res;
      }
      return ctx;
    }
  };
};
