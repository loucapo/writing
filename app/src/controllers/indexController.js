module.exports = function (repository) {
  return {
    async index(ctx) {
      var row = await repository.row('select * from "hello"');
      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true,
        payload: row
      };
    }
  };
};
