-- name: getCriteria
SELECT
  criterion_id,
  title,
  description,
  is_available_to_rubric,
  rubric_level_1,
  rubric_level_2,
  rubric_level_3,
  rubric_level_4
FROM
  writer_key.criterion
;
