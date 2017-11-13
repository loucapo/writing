-- name:getSubmissionStatusByDraftId
SELECT
  student_draft_id,
  student_activity_id,
  draft_id,
  student_id,
  submitted_at,
  review_status,
  status
FROM
  writer_key.student_draft
WHERE
  draft_id = :draftId
  AND deleted_at IS NULL
;
