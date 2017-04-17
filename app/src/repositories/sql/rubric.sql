-- name: getRubrics
select *
from rubric

-- name: getRubricCriteria
SELECT * FROM rubric_criteria

-- name: getRubricById
select *
from rubric
where id = :id