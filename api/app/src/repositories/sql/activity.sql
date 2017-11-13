-- name: getActivityById
SELECT
  activity_id,
  course_id,
  title,
  prompt,
  rubric_id
FROM
  writer_key.activity
WHERE
  activity_id = :activityId
  AND deleted_at IS NULL
;

-- name: createActivity
INSERT INTO
  writer_key.activity (activity_id, course_id, title, created_by)
VALUES
  (:activityId, :courseId, :title, :createdBy)
;

-- name: updateActivityTitle
UPDATE
  writer_key.activity
SET
  title = :title,
  modified_by = :modifiedBy,
  modified_at = now()
WHERE
  activity_id = :activityId
;

-- name: updateActivityPrompt
UPDATE
  writer_key.activity
SET
  prompt = :prompt,
  modified_by = :modifiedBy,
  modified_at = now()
WHERE
  activity_id = :activityId
;

-- name: updateActivityRubric
UPDATE
  writer_key.activity
SET
  rubric_id = :rubricId,
  modified_by = :modifiedBy,
  modified_at = now()
WHERE
  activity_id = :activityId
;
