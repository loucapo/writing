-- name: createFeedback
INSERT INTO
  writer_key.feedback (feedback_id, student_draft_id, content, level, is_header_shown, goal_id, editing_mark_id, created_by)
VALUES
  (:feedbackId, :studentDraftId, :content, :level, :isHeaderShown, :goalId, :editingMarkId, :createdBy)
;

--name: getFeedback
SELECT
  feedback_id,
  student_draft_id,
  content,
  level,
  goal_id,
  editing_mark_id,
  is_header_shown
FROM
  writer_key.feedback
WHERE
  student_draft_id = :studentDraftId
  AND deleted_at IS NULL
;

--name: deleteFeedback
UPDATE
  writer_key.feedback
SET
  deleted_at = now(),
  deleted_by = :deletedById
WHERE
  feedback_id = :feedbackId
;
