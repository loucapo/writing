-- Table: "student_draft"

DROP TABLE IF EXISTS "student_draft" CASCADE;

CREATE TABLE "student_draft"
(
  student_draft_id uuid NOT NULL,
  student_activity_id text NOT NULL,
  draft_id text NOT NULL,
  paper jsonb,
  created_by_id text NOT NULL,
  created_date date NOT NULL,
  modified_by_id text,
  modified_date date
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "student_draft"
  OWNER TO writer_key;
ALTER TABLE "student_draft"
    ADD PRIMARY KEY (student_draft_id);
