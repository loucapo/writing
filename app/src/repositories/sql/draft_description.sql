-- name: get_draft_descriptions_by_activity_id
select *
from draft_description
where activity_id = :activityId
ORDER BY list_position ASC

-- name: create_new_draft_description
INSERT INTO draft_description
    (id,
    activity_id,
    instructions,
    list_position,
    created_date)
VALUES
    (:id,
    :activityId,
    :instructions,
    :listPosition,
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
