
module.exports = function (applicationStrategies, config, moment, superagent, logger) {
  return {
    activityOverview: async function (ctx) {

      // Ordinarily, we'd unpack this from platform launch JWT launch service sends.
      // In the meantime, we'll simply make our own data.
      // See the tool provider citizenship guide for info on the structure.
      var dummyData = {
        user_data : {
          id : 'f3e3c2d5-cf43-4f63-924f-3ec7a125a334',
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

      // make post to API
      var cleanData = {
        activityId: dummyData.launch_data.resource_link_id,
        createdById: dummyData.user_data.id,
        createdDate: moment().toISOString()
      };

      var strategy = applicationStrategies.writerKey;
      const jwt = strategy.execute(dummyData);

      superagent
        .put(`${config.app.wk_api_url}/activity/${dummyData.launch_data.resource_link_id}/studentactivity`)
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
      ctx.redirect('/resource/'+dummyData.launch_data.resource_link_id);
    }
  };
};
