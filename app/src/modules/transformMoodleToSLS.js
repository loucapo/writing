

// TODO put validation on here, we can't trust that moodle data is not pooched
// TODO actually, that might not matter, we don't have any law of demiter violations
// TODO so it'll just be undefined and the json.schema validatin should catch it
// TODO so maybe we should schema validate before we return. or maybe the client should do that
module.exports = function (moment) {
    return {
        transformCourse(courses) {
            courses.map(c => ({
                id: c.m_course_id,
                title: c.course_title,
                sections: c.units.map(s => ({
                    id: s.section,
                    title: s.title,
                    order: s.order,
                    summary: s.summary,
                    assignments: s.activities.map(a => ({
                        id: a.id,
                        name: a.name,
                        link: a.link,
                        type: a.type,
                        pointsAvailable: s.pointsTotal,
                        pointsEarned: s.pointsEarned,
                        openDate: moment(s.openDate),
                        closeDate: moment(s.closeDate),
                        badge: s.badge
                    }))
                }))
            }));
        }
    };
};

