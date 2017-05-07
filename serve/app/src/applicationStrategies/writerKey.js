
module.exports = function (jsonwebtoken, config) {
  return {
    execute(launchData) {
      return jsonwebtoken.sign({
        version : '1',
        user_data : {
          id : launchData.user_data.id,
          first_name : launchData.user_data.first_name,
          last_name : launchData.user_data.last_name,
          email : launchData.user_data.email
        },
        course_data : {
          course_1002 : {
            writing : launchData.user_data.role
          }
        },
        launch_data : {
          resource_link_id : launchData.launch_data.resource_link_id
        }
      }, config.app.consumer_secret);
    }
  }
};
