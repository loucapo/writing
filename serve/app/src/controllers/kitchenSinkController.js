
module.exports = function (config, jsonwebtoken) {
  return {
    ksOverview: async function (ctx) {
    //we use the activityId if sent, everything is otherwise hardcoded
      let courseId = 'ee0a7acd-2054-4129-b3fd-28563421cb0b';
      let lmsId = 'bbbe3f75-41f7-4b98-9d8e-89896a61d753';

      //crank a dummy JWT (for faking login, basically)
      let dummyData = {
        id : '5ef7fa10-f4a4-4add-9191-882de6b9065b',
        first_name : 'Thomas',
        name : 'Collins',
        email : 'tom.collins@university.com',
        admin : 'false', 
        auth_redirect : 'http://zombo.com',
        course_data : [
          {
            course_id : courseId, 
            lms_id : lmsId,
            expiry : 'false',
            role : 'student'
          }
        ]
      };
      const jwt = jsonwebtoken.sign(dummyData, config.app.consumer_secret);

      //set the cookie and redirect.
      ctx.cookies.set("id_token", jwt, {httpOnly : false});

      ctx.body = await ctx.render("index", {
          SPA_URL: config.app.spa_url
      });
    }
  };
};
