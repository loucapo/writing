-- name: createFeedback
INSERT INTO feedback
  (feedback_id,
  student_draft_id,
  content,
  level,
  is_header_shown,
  goal_id,
  editing_mark_id,
  created_by)
VALUES
  (:feedbackId,
  :studentDraftId,
  :content,
  :level,
  :isHeaderShown,
  :goalId,
  :editingMarkId,
  :createdBy)

--name: getFeedback
SELECT * FROM feedback
WHERE student_draft_id = :studentDraftId
AND deleted_at is null

--name: deleteFeedback
UPDATE feedback
SET
    deleted_at = now(),
    deleted_by = :deletedById
WHERE feedback_id = :feedbackId;