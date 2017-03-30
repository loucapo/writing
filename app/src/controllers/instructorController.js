
module.exports = function (applicationStrategies, config, moment, superagent, logger) {
  return {
    activityOverview: async function (ctx) {

      // Ordinarily, we'd unpack this from platform launch JWT launch service sends.
      // In the meantime, we'll simply make our own data.
      // See the tool provider citizenship guide for info on the structure.
      var dummyData = {
        user_data : {
          id : '123',
          as_id : '123',
          first_name : 'Judy',
          last_name : 'Smith',
          role : 'instructor'
        },
        launch_data : {
          resource_link_id : 'd3e3c2d5-cf43-4f63-924f-3ec7a125a334',
          course_id : '4454554',
          course_name : 'Eng 1002'
        }
      };

      // make post to API
      var cleanData = {
        id: dummyData.launch_data.resource_link_id,
        courseId: dummyData.launch_data.course_id,
        title: dummyData.launch_data.course_name,
        createdById: dummyData.user_data.id,
        createdDate: moment().toISOString()
      };

      var strategy = applicationStrategies.writerKey;
      const jwt = strategy.execute(dummyData);

      superagent
        .put(`${config.app.wk_api_url}/activity/${dummyData.launch_data.resource_link_id}`)
        .send(cleanData)
        .set("Cookie", `wt_jwt=${jwt}`)
        .end(function(err, res){
          if(err){
            //XXX - this used to throw, but that would cause the service to crash.  Will circle back on that.
            logger.error(`error: ${JSON.stringify(err)}`);
            return ctx;
          }
        });

      ctx.cookies.set("wt_jwt", jwt, {httpOnly : false});
      ctx.redirect('/activity/'+dummyData.launch_data.resource_link_id);
    }
  };
};
