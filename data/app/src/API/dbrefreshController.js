module.exports = function(killAllData, loadData) {
  return {
    async dbRefresh(ctx) {
      await killAllData();
      await loadData();
      ctx.status = 200;
      return ctx;
    }
  };
};
