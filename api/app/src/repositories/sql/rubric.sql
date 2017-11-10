-- name: getRubrics
select *
from rubric
ORDER BY index

-- name: getRubricCriteria
SELECT * FROM rubric2criterion

-- name: getRubricById
select *
from rubric
where rubric_id = :id
