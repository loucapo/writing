module.exports = function (repository, fs, uuid) {
  return {
    async index(ctx) {
      var script = fs.readFileSync(__dirname + '/schema.sql').toString();
      await repository.query(script);

      await repository.query("INSERT INTO writer_key (id, \"Hello\") VALUES ('" + uuid.v4() + "', 'hello world')");

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
