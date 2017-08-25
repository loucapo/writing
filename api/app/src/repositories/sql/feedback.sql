-- name: createFeedback
INSERT INTO feedback
  (feedback_id,
  student_draft_id,
  content,
  created_date,
  created_by_id)
VALUES
  (:feedbackId,
  :studentDraftId,
  :content,
  :createdDate,
  :createdById)

--name: getFeedback
SELECT * FROM feedback
WHERE student_draft_id = :studentDraftId