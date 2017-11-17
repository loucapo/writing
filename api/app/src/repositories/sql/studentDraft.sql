-- name: getStudentDraftByStudentActivityIdAndDraftId
SELECT
  student_draft_id,
  student_activity_id,
  draft_id,
  student_id,
  paper,
  feedback_paper,
  end_comment,
  submitted_at,
  status,
  review_status,
  reviewed_at,
  final_grade
FROM
  writer_key.student_draft
WHERE
  student_activity_id = :studentActivityId 
  AND draft_id = :draftId
  AND deleted_at IS NULL
;

-- name: getStudentDraftByStudentDraftId
SELECT
  student_draft_id,
  student_activity_id,
  draft_id,
  student_id,
  paper,
  feedback_paper,
  end_comment,
  submitted_at,
  status,
  review_status,
  reviewed_at,
  final_grade
FROM
  writer_key.student_draft
WHERE
  student_draft_id = :studentDraftId
  AND deleted_at IS NULL
;

-- name: getStudentDraftsByStudentActivityId
SELECT
  student_draft_id,
  student_activity_id,
  draft_id,
  student_id,
  paper,
  feedback_paper,
  end_comment,
  submitted_at,
  status,
  review_status,
  reviewed_at,
  final_grade
FROM
  writer_key.student_draft
WHERE
  student_activity_id = :studentActivityId
  AND deleted_at IS NULL
;

-- name: createStudentDraft
INSERT INTO writer_key.student_draft (student_draft_id, student_activity_id, student_id, draft_id, created_by, paper)
VALUES
  (:studentDraftId, :studentActivityId, :studentId, :draftId, :createdBy, :paper)
;

-- name: updateStudentDraftPaper
UPDATE
  writer_key.student_draft
SET
  paper = :paper,
  status = :status,
  modified_by = :modifiedBy,
  modified_at = now()
WHERE
  student_draft_id = :studentDraftId
;

-- name: updateFeedbackPaper
UPDATE
  writer_key.student_draft
SET
  feedback_paper = :feedbackPaper,
  modified_by = :modifiedBy,
  modified_at = now()
WHERE
  student_draft_id = :studentDraftId
;

--name: getStudentReflectionAnswers
SELECT
  student_reflection_answer_id,
  student_draft_id,
  student_reflection_question_id,
  student_reflection_answer
FROM
  writer_key.student_reflection_answer
WHERE
  student_draft_id = :studentDraftId
  AND deleted_at IS NULL
;

-- name: addStudentReflectionAnswerToStudentDraft
INSERT INTO
  writer_key.student_reflection_answer (student_draft_id, student_reflection_answer_id, student_reflection_question_id, student_reflection_answer, created_by)
VALUES
  (:studentDraftId, :studentReflectionAnswerId, :studentReflectionQuestionId, :studentReflectionAnswer, :createdBy)
;

-- name: removeAllStudentReflectionAnswers
DELETE FROM
  writer_key.student_reflection_answer
WHERE
  student_draft_id = :studentDraftId
;

-- name: submitStudentDraft
UPDATE
  writer_key.student_draft
SET
  status = :status,
  review_status = :reviewStatus,
  submitted_at = now(),
  modified_by = :modifiedBy,
  modified_at = now()
WHERE
  student_draft_id = :studentDraftId
RETURNING
  student_draft_id,
  status,
  review_status,
  submitted_at
;

-- name: updateReviewStatus
UPDATE
  writer_key.student_draft
SET
  review_status = :reviewStatus,
  modified_by = :modifiedBy,
  modified_at = now()
WHERE
  student_draft_id = :studentDraftId
;

-- name: updateReviewStatusSubmitted
UPDATE
  writer_key.student_draft
SET
  review_status = :reviewStatus,
  modified_by = :modifiedBy,
  reviewed_at = now(),
  modified_at = now()
WHERE
  student_draft_id = :studentDraftId
;

-- name: submitStudentDraftEndComment
UPDATE
  writer_key.student_draft
SET
  end_comment = :endComment,
  modified_by = :modifiedBy,
  modified_at = now()
WHERE
  student_draft_id = :studentDraftId
;

-- name: submitStudentDraftFinalGrade
UPDATE
  writer_key.student_draft
SET
  final_grade = :finalGrade,
  modified_by = :modifiedBy,
  modified_at = now()
WHERE
  student_draft_id = :studentDraftId
;
