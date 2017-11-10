-- name: createStudentRubricScore
INSERT INTO student_rubric_score
  (student_rubric_score_id,
  student_draft_id,
  rubric_id,
  criterion_id,
  score,
  created_by)
VALUES
  (:studentRubricScoreId,
  :studentDraftId,
  :rubricId,
  :criterionId,
  :score,
  :createdBy)

-- name: removeAllStudentRubricScores
DELETE FROM student_rubric_score
WHERE student_draft_id = :studentDraftId

--name: getStudentRubricScores
SELECT * FROM student_rubric_score
WHERE student_draft_id = :studentDraftId
AND deleted_at is null