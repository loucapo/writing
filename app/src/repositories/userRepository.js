
module.exports = function (pgasync, config, User) {
  return function () {
    const pg = new pgasync.default(config.postgres.config);
    return {
      async createInstructorFromLTILaunch(user) {
        var query;
        if (!user._isNew) {
          query = `UPDATE "user" SET 
              firstname = '${user._firstName}',
              lastname = '${user._lastName}',
              email = '${user._email}',
              iam = '${user._IAM}',
              usertype = '${user._userType.name}'
            where id = '${user._id}';`;
        } else {
          query = `INSERT INTO "user" ("id", "firstname", "lastname", "email", "iam", "usertype") 
            VALUES ('${user._id}','${user._firstName}','${user._lastName}','${user._email}','${user._IAM}','${user._userType.name}');`
        }
        return await pg.query(query);
      },
      
      async retrieveInstructorFrom(IAM) {
        let user = new User();
        const sql = `get all the data and populate the Instructor`;
        const data = await pg.row(sql);
        return user;
      }
    }
  }
};
