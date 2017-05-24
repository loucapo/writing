-- name: getStudentActivity
select *
from student_activity
where activity_id = :activityId AND student_id = :studentId

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
    current_date)

