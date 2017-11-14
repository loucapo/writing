-- name: createStudentRubricScore
INSERT INTO
  writer_key.student_rubric_score (student_rubric_score_id, student_draft_id, rubric_id, criterion_id, score, created_by)
VALUES
  (:studentRubricScoreId, :studentDraftId, :rubricId, :criterionId, :score, :createdBy)
;

-- name: removeAllStudentRubricScores
DELETE FROM
  writer_key.student_rubric_score
WHERE
  student_draft_id = :studentDraftId
;

--name: getStudentRubricScores
SELECT
  student_rubric_score_id,
  student_draft_id,
  rubric_id,
  criterion_id,
  score
FROM
  writer_key.student_rubric_score
WHERE
  student_draft_id = :studentDraftId
  AND deleted_at IS NULL
;