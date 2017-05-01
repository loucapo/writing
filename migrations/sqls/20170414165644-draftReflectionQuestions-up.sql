
ALTER TABLE student_reflection_question ADD PRIMARY KEY (id);

-- Table: "draft_student_reflection_question"

DROP TABLE IF EXISTS "draft_student_reflection_question";

CREATE TABLE "draft_student_reflection_question"
(
  draft_id uuid REFERENCES draft (id) ON DELETE CASCADE,
  student_reflection_question_id uuid REFERENCES student_reflection_question (id) ON DELETE CASCADE,
  index int
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "draft_student_reflection_question"
  OWNER TO writer_key;

