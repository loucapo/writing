-- name: addDraftToActivity
INSERT INTO draft
    (id,
    activity_id,
    instructions,
    index,
    created_by_id,
    created_date)
VALUES
    (:id,
    :activityId,
    :instructions,
    :index,
    :createdById,
    now())

-- name: delete_draft_description
delete
from draft_description
where id = :id

-- name: update_draft_description
UPDATE draft_description
SET
    instructions = :instructions,
    list_position = :listPosition
WHERE id = :id;

-- name: getDraftsByActivityId
SELECT *
FROM draft
WHERE activity_id = :activityId
