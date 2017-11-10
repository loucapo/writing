-- name: getStudentDraftByStudentActivityIdAndDraftId
SELECT *
FROM student_draft
WHERE student_activity_id = :studentActivityId 
AND draft_id = :draftId
AND deleted_at is null

-- name: getStudentDraftByStudentDraftId
SELECT *
FROM student_draft
WHERE student_draft_id = :studentDraftId
AND deleted_at is null

-- name: getStudentDraftsByStudentActivityId
SELECT *
FROM student_draft
WHERE student_activity_id = :studentActivityId
AND deleted_at is null

-- name: createStudentDraft
INSERT INTO student_draft
    (student_draft_id,
    student_activity_id,
    student_id,
    draft_id,
    created_by,
    paper)
VALUES
    (:studentDraftId,
    :studentActivityId,
    :studentId,
    :draftId,
    :createdBy,
    :paper)

-- name: updateStudentDraftPaper
UPDATE student_draft
SET paper = :paper,
status = :status,
modified_by = :modifiedBy,
modified_at = now()
WHERE student_draft_id = :studentDraftId

-- name: updateFeedbackPaper
UPDATE student_draft
SET feedback_paper = :feedbackPaper,
modified_by = :modifiedBy,
modified_at = now()
WHERE student_draft_id = :studentDraftId

--name: getStudentReflectionAnswers
SELECT * FROM student_reflection_answer
WHERE student_draft_id = :studentDraftId
AND deleted_at is null

-- name: addStudentReflectionAnswerToStudentDraft
INSERT INTO student_reflection_answer
    (student_draft_id,
    student_reflection_answer_id,
    student_reflection_question_id,
    student_reflection_answer,
    created_by)
VALUES
    (:studentDraftId,
    :studentReflectionAnswerId,
    :studentReflectionQuestionId,
    :studentReflectionAnswer,
    :createdBy)

-- name: removeAllStudentReflectionAnswers
DELETE FROM student_reflection_answer
WHERE student_draft_id = :studentDraftId

-- name: submitStudentDraft
UPDATE student_draft
SET status = :status,
    review_status = :reviewStatus,
    submitted_at = now(),
    modified_by = :modifiedBy,
    modified_at = now()
WHERE student_draft_id = :studentDraftId

-- name: updateReviewStatus
UPDATE student_draft
SET review_status = :reviewStatus,
    modified_by = :modifiedBy,
    modified_at = now()
WHERE student_draft_id = :studentDraftId

-- name: updateReviewStatusSubmitted
UPDATE student_draft
SET review_status = :reviewStatus,
    modified_by = :modifiedBy,
    reviewed_at = now(),
    modified_at = now()
WHERE student_draft_id = :studentDraftId

-- name: submitStudentDraftEndComment
UPDATE student_draft
SET end_comment = :endComment,
modified_by = :modifiedBy,
modified_at = now()
WHERE student_draft_id = :studentDraftId

-- name: submitStudentDraftFinalGrade
UPDATE student_draft
SET final_grade = :finalGrade,
modified_by = :modifiedBy,
modified_at = now()
WHERE student_draft_id = :studentDraftId
