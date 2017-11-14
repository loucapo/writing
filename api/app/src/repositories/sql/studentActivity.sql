-- name: getStudentActivity
SELECT
  student_activity_id,
  activity_id,
  student_id
FROM
  writer_key.student_activity
WHERE
  activity_id = :activityId
  AND student_id = :studentId
  AND deleted_at IS NULL
;

-- name: getStudentActivityById
SELECT
  student_activity_id,
  activity_id,
  student_id
FROM
  writer_key.student_activity
WHERE
  student_activity_id = :studentActivityId
  AND deleted_at IS NULL
;

-- name: createStudentActivity
INSERT INTO writer_key.student_activity (student_activity_id, activity_id, student_id, created_by)
VALUES
  (:studentActivityId, :activityId, :studentId, :createdBy)
;

