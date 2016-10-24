
module.exports = function (pgasync, config, Course) {
  return function () {
    const pg = new pgasync.default(config.postgres.config);
    return {
      async createCourseFromLTILaunch(course) {
        var query;
        if (!course._isNew) {
          query = `UPDATE "course" SET 
              title = '${course._title}',
              abbreviation = '${course._abbreviation}',
              courseid = '${course._courseId}',
              instructorid = '${course._instructorId}'
            where id = '${course._id}';`;
        } else {
          query = `INSERT INTO "course" ("id", "title", "abbreviation", "courseid", "instructorid") 
            VALUES ('${course._id}','${course._title}','${course._abbreviation}','${course._courseId}','${course._instructorId}');`
        }
        return await pg.query(query);
      },

      async retrieveCourseFromCourseId(courseId) {
        let course = new Course();
        const sql = `select title, abbreviation, courseId, instructorId`;
        const data = await pg.row(sql);
        return course;
      }
    }
  }
};
