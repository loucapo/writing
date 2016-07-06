
module.exports = function (pgbluebird, config, transformMoodleToSLS) {
    return {
        getCourseById(id) {
            var cnn;
            var pg = new pgbluebird(); // eslint-disable-line new-cap
            return pg.connect(config.postgres.connectionString)
                .then((connection) => {
                    cnn = connection;
                    return cnn.client.query(`select c.*, g.enrolmentkey 
                     from mdl_course c 
                     left join mdl_groups g on c.id = g.courseid 
                     where c.id = ` + id);
                }).then((result) => {
                    var course = transformMoodleToSLS(result.rows[0]);
                    cnn.done();
                    return course;
                });
        },
        coursesAvailableByUID() {
            var cnn;
            var pg = new pgbluebird();  // eslint-disable-line new-cap
            return pg.connect(config.postgres.connectionString)
                .then((connection) => {
                    cnn = connection;
                    return cnn.client.query('select title, id from mdl_course where id <> 1 order by id asc');
                })
                .then((result) => {
                    var availableCourses = result.rows;
                    cnn.done();
                    return availableCourses;
                });
        }
    };
};
