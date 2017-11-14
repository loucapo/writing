-- name: getRubrics
SELECT
  rubric_id,
  title,
  description,
  index
FROM
  writer_key.rubric
ORDER BY
  index
;

-- name: getRubricCriteria
SELECT
  rubric_id,
  criterion_id,
  index
FROM
  writer_key.rubric2criterion
;

-- name: getRubricById
SELECT
  rubric_id,
  title,
  description,
  index
FROM
  writer_key.rubric
WHERE
  rubric_id = :id
;
