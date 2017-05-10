
module.exports = function (applicationStrategies, config) {
  return {
    prodtoolsOverview: async function (ctx) {

      // Ordinarily, we'd unpack this from platform launch JWT launch service sends.
      // In the meantime, we'll simply make our own data.
      // See the tool provider citizenship guide for info on the structure.
      var dummyData = {
        user_data : {
          id : '901',
          as_id : '901',
          first_name : 'Peggy',
          last_name : 'Lou',
          email : 'peggy.lou@macmillan.com',
          role : 'admin'
        },
        launch_data : {
          resource_link_id : '13630184-5955-4dbe-9908-ab065f1bcad2',
          course_id : '4454554',
          course_name : 'Eng 1002'
        }
      };

      var strategy = applicationStrategies.writerKey;
      const jwt = strategy.execute(dummyData);

      ctx.cookies.set("wt_jwt", jwt, {httpOnly : false});
      ctx.body = await ctx.render("prodtools", {
        PROD_TOOLS_SPA_URL: config.app.prod_tools_spa_url
      });
    }
  };
};