-- Table: "student_activity"

DROP TABLE IF EXISTS "student_activity";

CREATE TABLE "student_activity"
(
  id uuid NOT NULL,
  activity_id text NOT NULL,
  student_id text NOT NULL,
  created_by_id text NOT NULL,
  created_date date NOT NULL,
  modified_by_id text,
  modified_date date
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "student_activity"
  OWNER TO writer_key;
ALTER TABLE "student_activity"
    ADD PRIMARY KEY (id);
