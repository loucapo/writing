-- name: addDraftToActivity
INSERT INTO
  writer_key.draft (draft_id, activity_id, index, created_by)
VALUES
  (:draftId, :activityId, :index, :createdBy)
;

-- name: updateDraftInstructions
UPDATE
  writer_key.draft
SET
  instructions = :instructions,
  modified_by = :modifiedBy,
  modified_at = now()
WHERE
  draft_id = :draftId
;

-- name: getDraftsByActivityId
SELECT
  draft_id,
  activity_id,
  instructions,
  index
FROM
  writer_key.draft
WHERE
  activity_id = :activityId
  AND deleted_at is null
ORDER BY
  index
;

-- name: addGoalToDraft
INSERT INTO
  writer_key.draft2goal (draft_id, goal_id, index)
VALUES
  (:draftId, :goalId, :index)
;

-- name: removeGoalFromDraft
DELETE FROM
  writer_key.draft2goal
WHERE
  draft_id = :draftId
  AND goal_id = :goalId
;

-- name: getDraftGoals
SELECT
  draft_id,
  goal_id,
  index
FROM
  writer_key.draft2goal
;

-- name: getDraftStudentReflectionQuestions
SELECT
  draft_id,
  student_reflection_question_id,
  index
FROM 
  writer_key.draft2student_reflection_question
;

-- name: deleteDraft
UPDATE 
  writer_key.draft
SET
  deleted_at = now(),
  deleted_by = :deletedBy
WHERE 
  draft_id = :draftId
;

-- name: removeAllGoals
DELETE FROM 
  writer_key.draft2goal
WHERE
  draft_id = :draftId
;

-- name: removeAllStudentReflectionQuestions
DELETE FROM
  writer_key.draft2student_reflection_question
WHERE
  draft_id = :draftId
;

-- name: updateDraftIndex
UPDATE
  writer_key.draft
SET
  index = :index,
  modified_by = :modifiedBy,
  modified_at = now()
WHERE
  draft_id = :draftId
;

-- name: addStudentReflectionQuestionsToDraft
INSERT INTO
  writer_key.draft2student_reflection_question (draft_id, student_reflection_question_id, index)
VALUES
  (:draftId, :studentReflectionQuestionId, :index)
;

