/* eslint-disable camelcase */
module.exports = function(config, moment, superagent, logger, jsonwebtoken) {
  return {
    async activityOverview(ctx) {

      //we use the activityId if sent, everything is otherwise hardcoded
      const activityId = ctx.params.resourceId || 'd3e3c2d5-cf43-4f63-924f-3ec7a125a334';
      const courseId = 'ee0a7acd-2054-4129-b3fd-28563421cb0b';
      const lmsId = 'bbbe3f75-41f7-4b98-9d8e-89896a61d753';

      //crank a dummy JWT (for faking login, basically)
      const dummyData = {
        sub: 'auth0|f3e3c2d5-cf43-4f63-924f-3ec7a125a334',
        nickname: '147fake',
        name: 'Judy Smith',
        updated_at: '2017-10-18T18:35:30.823Z',
        email: 'judy.smith@university.com',
        email_verified: true,
        'https://macmillantech.com/app_metadata': {
          course_data: {
            instructor: [
              'ee0a7acd-2054-4129-b3fd-28563421cb0b'
            ]
          }
        },
        'https://macmillantech.com/user_metadata': {
          name: 'Judy Smith',
          first_name: 'Judy',
          last_name: 'Smith'
        },
        access_token: '-2Y45rQg_lBsleaA0MBjed61BCYlQwrU',
        iat: 1508351731
        // The real JWT will have an experation data, but commenting this one out for development purposes
        //'exp': 1508956531
      };

      const jwt = jsonwebtoken.sign(dummyData, config.app.consumer_secret);

      const putData = {
        courseId
      };

      // make call to API to create resource
      superagent
        .put(`${config.app.wk_api_url}/resource/${activityId}`)
        .send(putData)
        .set('Cookie', `id_token=${jwt}`)
        .end(err => {
          if (err) {
            //XXX - this used to throw, but that would cause the service to crash.  Will circle back on that.
            logger.error(`error: ${JSON.stringify(err)}`);
          }
          return ctx;
        });

      //set the cookie and redirect.
      ctx.cookies.set('id_token', jwt, {httpOnly: false});
      ctx.redirect('/' + lmsId + '/' + courseId + '/' + activityId);
    }
  };
};
