-- name: getActivityById
select *
from activity
where activity_id = :activityId
AND deleted_at is null

-- name: createActivity
INSERT INTO activity
    (activity_id,
    course_id,
    title,
    created_by)
VALUES
    (:activityId,
    :courseId,
    :title,
    :createdBy)

-- name: updateActivityTitle
UPDATE activity
SET title = :title,
modified_by = :modifiedBy,
modified_at = now()
WHERE activity_id = :activityId

-- name: updateActivityPrompt
UPDATE activity
SET prompt = :prompt,
modified_by = :modifiedBy,
modified_at = now()
WHERE activity_id = :activityId

-- name: updateActivityRubric
UPDATE activity
SET rubric_id = :rubricId,
modified_by = :modifiedBy,
modified_at = now()
WHERE activity_id = :activityId
