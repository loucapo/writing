
module.exports = function (applicationStrategies) {
  return {
    activityOverview: async function (ctx) {

      // Ordinarily, we'd unpack this from platform launch JWT launch service sends.
      // In the meantime, we'll simply make our own data.
      // See the tool provider citizenship guide for info on the structure.
      var dummyData = {
        user_data : {
          id : '456',
          as_id : '456',
          first_name : 'Bobby',
          last_name : 'Tibbits',
          email : 'bobby.tibbits@university.com',
          role : 'student',
        },
        launch_data : {
          resource_link_id : 'd3e3c2d5-cf43-4f63-924f-3ec7a125a334',
          course_id : '4454554',
          course_name : 'Eng 1002'
        }
      };

      var strategy = applicationStrategies.writerKey;
      const jwt = strategy.execute(dummyData);

      ctx.cookies.set("wt_jwt", jwt, {httpOnly : false});
      ctx.redirect('/resource/'+dummyData.launch_data.resource_link_id);
    }
  };
};
