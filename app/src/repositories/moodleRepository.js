
module.exports = function (slsData, pgbluebird, config, transformMoodleAndSLS, ajv) {
    return {
        getCourseByExternalId(id) {
            var cnn;
            var pg = new pgbluebird(); // eslint-disable-line new-cap
            var validation = new ajv(); // eslint-disable-line new-cap
            var sql = `select * mdl_course where id = ${id};
                        select * from mdl_course_sections where course = ${id};
                        select a.id,
                            a.section as sectionId,
                            lti.id as instance,
                            lti.name,
                            lti.instructorcustomparameters as json
                        from mdl_modules mm
                            inner join mdl_course_modules a on mm.id = a.module
                            inner join mdl_lti lti on a.instance = lti.id
                        where mm.name = 'lti'
                        and a.course = ${id};`;
            return pg.connect(config.postgres.config)
                .then((connection) => {
                    cnn = connection;
                    return cnn.client.query(sql);
                }).then((result) => {
                    var course = transformMoodleAndSLS(result /* wtfe from result */);
                    cnn.done();
                    var valid = validation.validate(slsData.definitions.course, course); // eslint-disable-line new-cap
                    if (!valid) {
                        throw new Error(validation.errorsText());
                    }
                    return course;
                });
        },
        coursesAvailableByUID() {
            var cnn;
            var pg = new pgbluebird();  // eslint-disable-line new-cap
            return pg.connect(config.postgres.config)
                .then((connection) => {
                    cnn = connection;
                    return cnn.client.query('select shortname, id from mdl_course where id <> 1 order by id asc');
                })
                .then((result) => {
                    var availableCourses = result.rows;
                    cnn.done();
                    return availableCourses;
                });
        }
    };
};
