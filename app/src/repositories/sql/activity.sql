-- name: getActivityById
select *
from activity
where id = :id

-- name: createActivity
INSERT INTO activity
    (id,
    course_id,
    title,
    created_by_id,
    created_date)
VALUES
    (:id,
    :courseId,
    :title,
    :createdById,
    :createdDate)

-- name: updateActivityPrompt
UPDATE activity
SET prompt = :prompt,
modified_by_id = :modifiedById
WHERE id = :id

