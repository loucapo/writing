module.exports = function (repository) {
  return {
    async index(ctx) {
      var row = await repository.row('select * from "writer_key"');
      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true,
        data: row
      };
    }
  };
};
