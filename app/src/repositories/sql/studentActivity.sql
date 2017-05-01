-- name: getStudentActivityById
select *
from student_activity
where student_activity_id = :studentActivityId

-- name: createStudentActivity
INSERT INTO student_activity
    (student_activity_id,
    activity_id,
    student_id,
    created_by_id,
    created_date)
VALUES
    (:studentActivityId,
    :activityId,
    :studentId,
    :createdById,
    :createdDate)

