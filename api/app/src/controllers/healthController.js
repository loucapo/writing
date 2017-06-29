module.exports = function(logger) {
  return {
    async healthCheck(ctx) {
      // This endpoint currently returns a 200 unconditionally.
      // We can add more health checks as the requirements
      // become more detailed. But for now we can report
      // that the API is basically functioning.
      logger.info('checking api service health');
      ctx.status = 200;
      ctx.body = '';

      return ctx;
    }
  };
};
