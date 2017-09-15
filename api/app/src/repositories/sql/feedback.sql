-- name: createFeedback
INSERT INTO feedback
  (feedback_id,
  student_draft_id,
  content,
  level,
  created_date,
  created_by_id)
VALUES
  (:feedbackId,
  :studentDraftId,
  :content,
  :level,
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