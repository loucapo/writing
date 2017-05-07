-- name: addDraftToActivity
INSERT INTO draft
    (draft_id,
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
WHERE draft_id = :draftId;

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

-- name: getDraftStudentReflectionQuestions
SELECT * FROM draft_student_reflection_question

-- name: removeDraftFromActivity
DELETE from draft WHERE draft_id = :draftId

-- name: removeAllGoals
DELETE FROM draft_criteria
WHERE draft_id = :draftId

-- name: removeAllStudentReflectionQuestions
DELETE FROM draft_student_reflection_question
WHERE draft_id = :draftId

-- name: updateDraftIndex
UPDATE draft
SET
    index = :index,
    modified_by_id = :modifiedById
WHERE draft_id = :draftId;

-- name: addStudentReflectionQuestionsToDraft
INSERT INTO draft_student_reflection_question
    (draft_id,
    student_reflection_question_id,
    index)
VALUES
    (:draftId,
    :studentReflectionQuestionId,
    :index)
