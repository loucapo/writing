-- name: getGoals
SELECT
  goal_id,
  title,
  description,
  option_1,
  option_2,
  option_3,
  index
FROM
  writer_key.goal
ORDER BY
  index
;