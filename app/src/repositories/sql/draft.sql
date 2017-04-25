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

-- name: updateDraftInstructions
UPDATE draft
SET
    instructions = :instructions,
    modified_by_id = :modifiedById
WHERE id = :draftId;

-- name: getDraftsByActivityId
SELECT *
FROM draft
WHERE activity_id = :activityId
ORDER BY index

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

-- name: removeDraftFromActivity
DELETE from draft WHERE id = :draftId

-- name: removeAllGoals
DELETE FROM draft_criteria
WHERE draft_id = :draftId

-- name: updateDraftIndex
UPDATE draft
SET
    index = :index,
    modified_by_id = :modifiedById
WHERE id = :draftId;
