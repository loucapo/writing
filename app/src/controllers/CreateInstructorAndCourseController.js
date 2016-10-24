
module.exports = function (readStoreRepository,
                           userRepository,
                           User,
                           courseRepository,
                           Course) {
  return {
    async CreateInstructorAndCourse(ctx) {
      const body = ctx.request.body;
      var rsSqlUser = `select id as _id from "user" where IAM = '${body.IAM}';`;
      var instructor = await readStoreRepository.rows(rsSqlUser);
      if(!instructor[0]){
        const createInstructorFromLTILaunch = {
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          IAM: body.IAM
        };
        instructor = new User();
        instructor.createInstructorFromLTILaunch(createInstructorFromLTILaunch);

        await userRepository.createInstructorFromLTILaunch(instructor);
      }
      var rsSqlCourse = `select id from "course" where courseId = '${body.courseId}';`;
      if(!await readStoreRepository.rows(rsSqlCourse)[0]){
        const createCourseFromLTILaunch = {
          title: body.title,
          abbreviation: body.abbreviation,
          courseId: body.courseId,
          instructorId: instructor._id || instructor
        };
        let course = new Course();
        course.createCourseFromLTILaunch(createCourseFromLTILaunch);
        await courseRepository.createCourseFromLTILaunch(course);
      }

      ctx.body = {success:true};

    }
  };
};
