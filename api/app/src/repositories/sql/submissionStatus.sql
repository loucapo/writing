-- name:getSubmissionStatusByDraftId
SELECT
    student_draft_id,
    student_activity_id,
    draft_id,
    student_id,
    submitted_date,
    review_status,
    status
FROM student_draft
WHERE draft_id = :draftId