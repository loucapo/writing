-- name: addDraftToActivity
INSERT INTO draft
    (id,
    activity_id,
    index,
    created_by_id,
    created_date)
VALUES
    (:draftId,
    :activityId,
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

-- name: addGoalToDraft
INSERT INTO draft_criteria
    (draft_id,
    criteria_id)
VALUES
    (:draftId,
    :goalId)

-- name: removeGoalFromDraft
DELETE FROM draft_criteria
where draft_id = :draftId
    AND criteria_id = :goalId

-- name: getDraftCriteria
SELECT * FROM draft_criteria

-- name: removeAllGoals
DELETE FROM draft_criteria
WHERE draft_id = :draftId
