-- name: updateStudentRubricScore
INSERT INTO student_rubric_score
  (student_rubric_score_id,
  student_draft_id,
  rubric_id,
  criteria_id,
  score,
  modified_date,
  modified_by_id)
VALUES
  (:studentRubricScoreId,
  :studentDraftId,
  :rubricId,
  :criteriaId,
  :score,
  :modifiedDate,
  :modifiedById)

-- name: removeAllStudentRubricScores
DELETE FROM student_rubric_score
WHERE student_draft_id = :studentDraftId

--name: getStudentRubricScores
SELECT * FROM student_rubric_score
WHERE student_draft_id = :studentDraftId