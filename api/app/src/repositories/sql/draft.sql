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
AND deleted_date is null
ORDER BY index

-- name: addGoalToDraft
INSERT INTO draft2goal
    (draft_id,
    goal_id)
VALUES
    (:draftId,
    :goalId)

-- name: removeGoalFromDraft
DELETE FROM draft2goal
where draft_id = :draftId
    AND goal_id = :goalId

-- name: getDraftGoals
SELECT * FROM draft2goal

-- name: getDraftStudentReflectionQuestions
SELECT * FROM draft_student_reflection_question

-- name: deleteDraft
UPDATE draft
SET
    deleted_date = :deletedDate,
    deleted_by_id = :deletedById
WHERE draft_id = :draftId;

-- name: removeAllGoals
DELETE FROM draft2goal
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
