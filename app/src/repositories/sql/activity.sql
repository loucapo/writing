-- name: getActivityById
select *
from activity
where id = :activityId

-- name: createActivity
INSERT INTO activity
    (id,
    course_id,
    title,
    created_by_id,
    created_date)
VALUES
    (:activityId,
    :courseId,
    :title,
    :createdById,
    :createdDate)

-- name: updateActivityPrompt
UPDATE activity
SET prompt = :prompt,
modified_by_id = :modifiedById
WHERE id = :activityId

-- name: updateActivityRubric
UPDATE activity
SET rubric_id = :rubricId,
modified_by_id = :modifiedById
WHERE id = :activityId
