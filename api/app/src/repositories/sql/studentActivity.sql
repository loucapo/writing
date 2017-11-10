-- name: getStudentActivity
select *
from student_activity
where activity_id = :activityId AND student_id = :studentId
AND deleted_at is null

-- name: getStudentActivityById
select *
from student_activity
where student_activity_id = :studentActivityId
AND deleted_at is null

-- name: createStudentActivity
INSERT INTO student_activity
    (student_activity_id,
    activity_id,
    student_id,
    created_by)
VALUES
    (:studentActivityId,
    :activityId,
    :studentId,
    :createdBy)

