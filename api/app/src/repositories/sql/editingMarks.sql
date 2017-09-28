-- name: getEditingMarks
SELECT *
FROM editing_mark
where deleted_date is null
order by index