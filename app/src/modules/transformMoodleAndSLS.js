

// TODO ok, so I don't really know what will be coming back from db so sets is just a stand in.
module.exports = function (moment, slsData, ajv) { // , config) {
    return {
        transformCourseFromMoodle(sets) {
            var course = sets.course && sets.course[0] ? sets.course[0] : undefined;
            return !course ? {} : {
                externalId: course.id,
                title: course.shortname,
                fullname: course.fullname,
                sections: sets.sections ? sets.sections.map(s => ({
                    externalId: s.id,
                    title: s.name,
                    order: s.section,
                    summary: s.summary,
                    assignments: sets.assignments ? sets.assignments.filter(a => a.sectionId === s.id)
                        .map(a => {
                            var assignment = {
                                externalId: a.id,
                                sectionId: s.id,
                                activityId: a.module,
                                ltiId: a.instance,
                                name: a.name
                                // link: config.ltiLink + a.id
                            };
                            // TODO let's do a try parse here so we can log an error as specifically bad json
                            if (a.json) {
                                var data = JSON.parse(a.json);
                                assignment.type = data.type || '';
                                assignment.pointsAvailable = data.pointsTotal || 0;
                                assignment.pointsEarned = data.pointsEarned || 0;
                                assignment.openDate = moment.unix(data.openDate || 0);
                                assignment.closeDate = moment.unix(data.closeDate || 0);
                                assignment.badge = data.badge || '';
                            }
                            return assignment;
                        }) : []
                })) : []
            };
        },


        // TODO all this is horrible because if we are creating new records we need to return the id's and insert
        // TODO as foreign keys

        upsertSection(section, sql) {
            if (section.id > 0) {
                /* eslint-disable no-param-reassign */
                sql += `UPDATE mdl_course_sections 
                            name=${section.title}, 
                            section=${section.order}, 
                            summary=${section.summary},
                            timemodified=${moment().unix()}
                        WHERE id=${section.id}`;
            } else {
                /* eslint-disable no-param-reassign */
                sql += `INSERT INTO mdl_course_sections set 
                            (name, 
                            section, 
                            summary,
                            timecreated, 
                            timemodified) 
                        values 
                            (${section.title},
                            ${section.order},
                            ${section.summary},
                            ${moment().unix()},
                            ${moment().unix()})`;
            }
            return sql;
        },

        upsertLTI(assi, sql) {
            var params = JSON.stringify({
                type: assi.type,
                pointsTotal: assi.pointsAvailable,
                pointsEarned: assi.pointsEarned,
                openDate: assi.pointsEarned.unix(),
                closeDate: assi.closeDate.unix(),
                badge: assi.badge
            });

            if (assi.ltiId > 0) {
                /* eslint-disable no-param-reassign */
                sql += `UPDATE mdl_lti 
                            instructorcustomparameters=${params}, 
                            name=${assi.name}, 
                            timemodified=${moment().unix()} 
                        WHERE id=${assi.ltiId}`;
            } else {
                /* eslint-disable no-param-reassign */
                sql += `INSERT INTO mdl_lti set 
                            (instructorcustomparameters,
                            timecreated, 
                            
                            timemodified) 
                        values 
                            (${params},
                            ${moment().unix()},
                            ${moment().unix()})`;
            }
            return sql;
        },

        upsertAssignment(assi, sql) {
            if (assi.id > 0) {
                /* eslint-disable no-param-reassign */
                sql += `UPDATE mdl_course_modules section=${assi.sectionId} timemodified=${moment().unix()} 
                            WHERE id=${assi.id}`;
            } else {
                /* eslint-disable no-param-reassign */
                sql += `INSERT INTO mdl_course_modules set 
                            (section, 
                            module, 
                            instance,
                            timecreated, 
                            timemodified) 
                        values 
                            (${assi.sectionId},
                            ${assi.activityId},
                            ${assi.ltiId},
                            ${moment().unix()},
                            ${moment().unix()} )`;
            }
            sql = this.upsertLTI(assi, sql);
            return sql;
        },

        transformCourseToUpsertSQL(course) {
            var valid = new ajv().validate(slsData.definitions.course, course); // eslint-disable-line new-cap
            if (!valid) {
                throw new Error(ajv.errorsText());
            }

            var sql = `UPDATE mdl_course shortname='${course.title};'`;
            course.sections.forEach(s => {
                this.upsertSection(s, sql);
                s.assignments.forEach(a => {
                    this.upsertAssignment(a, sql);
                });
            });
            return sql;
        }
    };
};
