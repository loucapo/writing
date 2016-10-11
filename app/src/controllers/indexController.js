module.exports = function (koasend) {
  return {
    async index(ctx) {
      // var row = await repository.row('select * from "writer_key"');
      // ctx.status = 200;
      // ctx.body = {
      //   status: ctx.status,
      //   success: true,
      //   data: row
      // };



      console.log('==========ctx.isAuthessssssssssssssssssssssssnticated()=========');
      console.log(ctx.isAuthenticated());
      console.log(ctx.request.user);
      console.log(ctx.session);
      console.log('==========END ctx.isAuthenticated()=========');

      await koasend(ctx, 'app/src/views/index.html');

    }
  };
};
