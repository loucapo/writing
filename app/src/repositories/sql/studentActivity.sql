-- name: getStudentActivityById
select *
from student_activity
where id = :studentActivityId

-- name: createStudentActivity
INSERT INTO student_activity
    (id,
    activity_id,
    created_by_id,
    created_date)
VALUES
    (:studentActivityId,
    :activityId,
    :createdById,
    :createdDate)

