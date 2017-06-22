-- name: getStudentDraftByStudentActivityIdAndDraftId
SELECT *
FROM student_draft
WHERE student_activity_id = :studentActivityId AND draft_id = :draftId

-- name: getStudentDraftByStudentDraftId
SELECT *
FROM student_draft
WHERE student_draft_id = :studentDraftId

-- name: getStudentDraftsByStudentActivityId
SELECT *
FROM student_draft
WHERE student_activity_id = :studentActivityId

-- name: createStudentDraft
INSERT INTO student_draft
    (student_draft_id,
    student_activity_id,
    student_id,
    draft_id,
    created_by_id,
    created_date)
VALUES
    (:studentDraftId,
    :studentActivityId,
    :studentId,
    :draftId,
    :createdById,
    :createdDate)

-- name: updateStudentDraftPaper
UPDATE student_draft
SET paper = :paper,
status = :status,
modified_by_id = :modifiedById,
modified_date = :modifiedDate
WHERE student_draft_id = :studentDraftId

--name: getStudentReflectionAnswers
SELECT * FROM student_reflection_answer
WHERE student_draft_id = :studentDraftId

-- name: addStudentReflectionAnswerToStudentDraft
INSERT INTO student_reflection_answer
    (student_draft_id,
    student_reflection_answer_id,
    student_reflection_question_id,
    student_reflection_answer,
    created_by_id,
    created_date)
VALUES
    (:studentDraftId,
    :studentReflectionAnswerId,
    :studentReflectionQuestionId,
    :studentReflectionAnswer,
    :createdById,
    current_date)

-- name: removeAllStudentReflectionAnswers
DELETE FROM student_reflection_answer
WHERE student_draft_id = :studentDraftId

-- name: submitStudentDraft
UPDATE student_draft
SET status = :status,
    review_status = :reviewStatus,
    submitted_date = :submittedDate,
    modified_by_id = :modifiedById
WHERE student_draft_id = :studentDraftId
