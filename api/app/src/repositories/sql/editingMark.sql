-- name: getEditingMarks
SELECT
  editing_mark_id,
  title,
  description,
  index
FROM
  writer_key.editing_mark
ORDER BY
  index
;