-- name: getStudentReflectionQuestions
SELECT
  student_reflection_question_id,
  question,
  question_type,
  index
FROM
  writer_key.student_reflection_question
ORDER BY
  index
;