-- name: getGoals
select *
from goal
where deleted_date is null
order by index