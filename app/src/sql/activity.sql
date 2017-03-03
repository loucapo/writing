-- name: get_activity_by_id
select *
from activity
where courseId = :courseId

-- name: create_new_activity_from_jwt
INSERT INTO activity
    (id,
    courseId,
    title,
    createdById,
    createdDate)
VALUES
    (:id,
    :courseId,
    :title,
    :createdById,
    :createdDate)

