-- name: getActivityById
select *
from activity
where activity_id = :activityId

-- name: createActivity
INSERT INTO activity
    (activity_id,
    course_id,
    title,
    created_by_id,
    created_date)
VALUES
    (:activityId,
    :courseId,
    :title,
    :createdById,
    current_date)

-- name: updateActivityPrompt
UPDATE activity
SET prompt = :prompt,
modified_by_id = :modifiedById
WHERE activity_id = :activityId

-- name: updateActivityRubric
UPDATE activity
SET rubric_id = :rubricId,
modified_by_id = :modifiedById
WHERE activity_id = :activityId
