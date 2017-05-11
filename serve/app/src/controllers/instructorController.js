
module.exports = function (config, moment, superagent, logger, jsonwebtoken) {
  return {
    activityOverview: async function (ctx) {

      //we use the activityId if sent, everything is otherwise hardcoded
      let activityId = ctx.params.resourceId || 'd3e3c2d5-cf43-4f63-924f-3ec7a125a334'; 
      let courseId = 'ee0a7acd-2054-4129-b3fd-28563421cb0b';
      let lmsId = 'bbbe3f75-41f7-4b98-9d8e-89896a61d753';

      //crank a dummy JWT (for faking login, basically)
      let dummyData = {
        id : 'f3e3c2d5-cf43-4f63-924f-3ec7a125a334',
        first_name : 'Judy',
        name : 'Smith',
        email : 'judy.smith@university.com',
        admin : 'false', 
        auth_redirect : 'http://zombo.com',
        course_data : [
          {
            course_id : courseId, 
            lms_id : lmsId,
            expiry : 'false',
            role : 'instructor'
          }
        ]
      };
      const jwt = jsonwebtoken.sign(dummyData, config.app.consumer_secret);

      const putData = {
        courseId
      };

      // make call to API to create resource
      superagent
        .put(`${config.app.wk_api_url}/resource/${activityId}`)
        .send(putData)
        .set("Cookie", `id_token=${jwt}`)
        .end(function(err, res){
          if(err){
            //XXX - this used to throw, but that would cause the service to crash.  Will circle back on that.
            logger.error(`error: ${JSON.stringify(err)}`);
            return ctx;
          }
        });

      //set the cookie and redirect.
      ctx.cookies.set("id_token", jwt, {httpOnly : false});
      ctx.redirect('/lms/'+lmsId+'/course/'+courseId+'/resource/'+activityId);
    }
  };
};
