-- name: createFeedback
INSERT INTO feedback
  (feedback_id,
  student_draft_id,
  content,
  level,
  show_header,
  goal_id,
  editing_mark_id,
  created_date,
  created_by_id)
VALUES
  (:feedbackId,
  :studentDraftId,
  :content,
  :level,
  :showHeader,
  :goalId,
  :editingMarkId,
  :createdDate,
  :createdById)

--name: getFeedback
SELECT * FROM feedback
WHERE student_draft_id = :studentDraftId
AND deleted_date is null

--name: deleteFeedback
UPDATE feedback
SET
    deleted_date = :deletedDate,
    deleted_by_id = :deletedById
WHERE feedback_id = :feedbackId;