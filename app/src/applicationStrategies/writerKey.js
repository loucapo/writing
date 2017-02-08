
module.exports = function (jsonwebtoken, config) {
  return {
    execute(launchData) {
      return jsonwebtoken.sign({
        user_data : {
          id : launchData.user_data.id,
          as_id : launchData.user_data.as_id,
          first_name : launchData.user_data.first_name,
          last_name : launchData.user_data.last_name,
          role : launchData.user_data.role
        },
        launch_data : {
          resource_link_id : launchData.launch_data.resource_link_id,
          course_id : launchData.launch_data.course_id,
          course_name : launchData.launch_data.course_name
        }
      }, config.app.consumer_secret);
    },
    launchPage: '/'
  }
};
