ALTER TABLE student_draft DROP COLUMN active;
ALTER TABLE student_draft DROP COLUMN submitted;


ALTER TABLE student_draft ADD COLUMN status text default false;
