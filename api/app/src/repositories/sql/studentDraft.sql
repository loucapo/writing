-- name: getStudentDraftByStudentActivityId
select *
from student_draft
where student_activity_id = :studentActivityId AND draft_id = :draftId

-- name: createStudentDraft
INSERT INTO student_draft
    (student_draft_id,
    student_activity_id,
    draft_id,
    created_by_id,
    created_date)
VALUES
    (:studentDraftId,
    :studentActivityId,
    :draftId,
    :createdById,
    :createdDate)
