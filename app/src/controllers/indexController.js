module.exports = function (repository, fs, data) {
  return {
    async index(ctx) {
      var schema = fs.readFileSync(__dirname + '/schema.sql').toString();
      await repository.query(schema);
      await repository.query(data);
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
