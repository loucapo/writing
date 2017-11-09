--
-- Name: writer_key; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA IF NOT EXISTS writer_key;


-- ALTER SCHEMA writer_key OWNER TO postgres;

GRANT ALL ON SCHEMA public TO writer_key;
GRANT ALL ON SCHEMA public TO public;
COMMENT ON SCHEMA public
  IS 'standard public schema';

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA writer_key;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: UUID-ossp; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA writer_key;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET search_path = writer_key, public, pg_catalog;

SET default_with_oids = FALSE;

--
-- Name: rubric; Type: TABLE; Schema: writer_key; Owner: writer_key; Tablespace: 
--

DROP TABLE IF EXISTS writer_key.rubric CASCADE;

CREATE TABLE writer_key.rubric (
  rubric_id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT,
  description TEXT,
  index INTEGER
);


--
-- Name: activity; Type: TABLE; Schema: writer_key; Owner: writer_key; Tablespace: 
--

DROP TABLE IF EXISTS writer_key.activity CASCADE;

CREATE TABLE writer_key.activity (
  activity_id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_id TEXT NOT NULL,
  title TEXT,
  prompt JSONB,
  rubric_id UUID REFERENCES rubric(rubric_id),
  created_by TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  modified_by TEXT,
  modified_at TIMESTAMPTZ,
  deleted_by TEXT,
  deleted_at TIMESTAMPTZ
);

-- Index: activity_deleted_at_idx

DROP INDEX IF EXISTS activity_deleted_at_idx;

CREATE INDEX activity_deleted_at_idx ON writer_key.activity (activity_id)
  WHERE deleted_at IS NULL;


--
-- Name: criterion; Type: TABLE; Schema: writer_key; Owner: writer_key; Tablespace: 
--

DROP TABLE IF EXISTS writer_key.criterion CASCADE;

CREATE TABLE writer_key.criterion (
  criterion_id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT,
  description TEXT,
  is_available_to_rubric BOOLEAN,
  rubric_level_1 TEXT,
  rubric_level_2 TEXT,
  rubric_level_3 TEXT,
  rubric_level_4 TEXT
);


--
-- Name: draft; Type: TABLE; Schema: writer_key; Owner: writer_key; Tablespace: 
--

DROP TABLE IF EXISTS writer_key.draft CASCADE;

CREATE TABLE writer_key.draft (
  draft_id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
  activity_id UUID NOT NULL REFERENCES activity(activity_id),
  instructions TEXT,
  index INTEGER NOT NULL DEFAULT 0,
  created_by TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  modified_by TEXT,
  modified_at TIMESTAMPTZ,
  deleted_by TEXT,
  deleted_at TIMESTAMPTZ
);

-- Index: draft_deleted_at_idx

DROP INDEX IF EXISTS draft_deleted_at_idx;

CREATE INDEX draft_deleted_at_idx ON writer_key.draft (draft_id)
  WHERE deleted_at IS NULL;


--
-- Name: goal; Type: TABLE; Schema: writer_key; Owner: writer_key; Tablespace: 
--

DROP TABLE IF EXISTS writer_key.goal CASCADE;

CREATE TABLE writer_key.goal (
  goal_id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT,
  description TEXT,
  option_1 TEXT,
  option_2 TEXT,
  option_3 TEXT,
  index INTEGER
);


--
-- Name: draft2goal; Type: TABLE; Schema: writer_key; Owner: writer_key; Tablespace: 
--

DROP TABLE IF EXISTS writer_key.draft2goal CASCADE;

CREATE TABLE writer_key.draft2goal (
  draft_id UUID NOT NULL REFERENCES draft(draft_id),
  goal_id UUID NOT NULL REFERENCES goal(goal_id),
  index INTEGER
);


--
-- Name: student_reflection_question; Type: TABLE; Schema: writer_key; Owner: writer_key; Tablespace: 
--

DROP TABLE IF EXISTS writer_key.student_reflection_question CASCADE;

CREATE TABLE writer_key.student_reflection_question (
  student_reflection_question_id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
  question TEXT,
  question_type TEXT,
  index INTEGER
);


--
-- Name: draft2student_reflection_question; Type: TABLE; Schema: writer_key; Owner: writer_key; Tablespace: 
--

DROP TABLE IF EXISTS writer_key.draft2student_reflection_question CASCADE;

CREATE TABLE writer_key.draft2student_reflection_question (
  draft_id UUID NOT NULL REFERENCES draft(draft_id),
  student_reflection_question_id UUID NOT NULL REFERENCES student_reflection_question(student_reflection_question_id),
  index INTEGER
);


--
-- Name: editing_mark; Type: TABLE; Schema: writer_key; Owner: writer_key; Tablespace: 
--

DROP TABLE IF EXISTS writer_key.editing_mark CASCADE;

CREATE TABLE writer_key.editing_mark (
  editing_mark_id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT,
  description TEXT,
  index INTEGER
);


--
-- Name: related_content; Type: TABLE; Schema: writer_key; Owner: writer_key; Tablespace: 
--

DROP TABLE IF EXISTS writer_key.related_content CASCADE;

CREATE TABLE writer_key.related_content (
  related_content_id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT,
  link TEXT
);


--
-- Name: editing_mark2related_content; Type: TABLE; Schema: writer_key; Owner: writer_key; Tablespace: 
--

DROP TABLE IF EXISTS writer_key.editing_mark2related_content CASCADE;

CREATE TABLE writer_key.editing_mark2related_content (
  editing_mark_id UUID NOT NULL REFERENCES editing_mark(editing_mark_id),
  related_content_id UUID NOT NULL REFERENCES related_content(related_content_id),
  index INTEGER
);


--
-- Name: goal2related_content; Type: TABLE; Schema: writer_key; Owner: writer_key; Tablespace: 
--

DROP TABLE IF EXISTS writer_key.goal2related_content CASCADE;

CREATE TABLE writer_key.goal2related_content (
  goal_id UUID NOT NULL,
  related_content_id UUID NOT NULL,
  index INTEGER
);


--
-- Name: student_activity; Type: TABLE; Schema: writer_key; Owner: writer_key; Tablespace: 
--

DROP TABLE IF EXISTS writer_key.student_activity CASCADE;

CREATE TABLE writer_key.student_activity (
  student_activity_id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
  activity_id UUID NOT NULL REFERENCES activity(activity_id),
  student_id TEXT NOT NULL,
  created_by TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  modified_by TEXT,
  modified_at TIMESTAMPTZ,
  deleted_by TEXT,
  deleted_at TIMESTAMPTZ
);

-- Index: student_activity_activity_student_deleted_at_idx

DROP INDEX IF EXISTS student_activity_activity_student_deleted_at_idx;

CREATE INDEX student_activity_activity_student_deleted_at_idx ON writer_key.student_activity (activity_id, student_id)
  WHERE deleted_at IS NULL;

-- Index: student_activity_deleted_at_idx

DROP INDEX IF EXISTS student_activity_deleted_at_idx;

CREATE INDEX student_activity_deleted_at_idx ON writer_key.student_activity (student_activity_id)
  WHERE deleted_at IS NULL;


--
-- Name: student_draft; Type: TABLE; Schema: writer_key; Owner: writer_key; Tablespace: 
--

DROP TABLE IF EXISTS writer_key.student_draft CASCADE;

CREATE TABLE writer_key.student_draft (
  student_draft_id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_activity_id UUID NOT NULL REFERENCES student_activity(student_activity_id),
  draft_id UUID NOT NULL REFERENCES draft(draft_id),
  student_id TEXT NOT NULL,
  paper JSONB,
  feedback_paper TEXT,
  end_comment TEXT,
  submitted_at TIMESTAMPTZ,
  status TEXT DEFAULT FALSE,
  review_status TEXT,
  reviewed_at TIMESTAMPTZ,
  final_grade DOUBLE PRECISION,
  created_by TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  modified_by TEXT,
  modified_at TIMESTAMPTZ,
  deleted_by TEXT,
  deleted_at TIMESTAMPTZ
);

-- Index: student_draft_student_activity_draft_deleted_at_idx

DROP INDEX IF EXISTS student_draft_student_activity_draft_deleted_at_idx;

CREATE INDEX student_draft_student_activity_draft_deleted_at_idx ON writer_key.student_draft (student_activity_id, draft_id)
  WHERE deleted_at IS NULL;

-- Index: student_draft_deleted_at_idx

DROP INDEX IF EXISTS student_draft_deleted_at_idx;

CREATE INDEX student_draft_deleted_at_idx ON writer_key.student_draft (student_draft_id)
  WHERE deleted_at IS NULL;

-- Index: student_draft_student_activity_deleted_at_idx

DROP INDEX IF EXISTS student_draft_student_activity_deleted_at_idx;

CREATE INDEX student_draft_student_activity_deleted_at_idx ON writer_key.student_draft (student_activity_id)
  WHERE deleted_at IS NULL;

-- Index: student_draft_draft_deleted_at_idx

DROP INDEX IF EXISTS student_draft_draft_deleted_at_idx;

CREATE INDEX student_draft_draft_deleted_at_idx ON writer_key.student_draft (draft_id)
  WHERE deleted_at IS NULL;


--
-- Name: feedback; Type: TABLE; Schema: writer_key; Owner: writer_key; Tablespace: 
--

DROP TABLE IF EXISTS writer_key.feedback CASCADE;

CREATE TABLE writer_key.feedback (
  feedback_id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_draft_id UUID NOT NULL REFERENCES student_draft(student_draft_id),
  content TEXT,
  level INTEGER,
  goal_id UUID REFERENCES goal(goal_id),
  editing_mark_id UUID REFERENCES editing_mark(editing_mark_id),
  is_header_shown BOOLEAN,
  created_by TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  deleted_by TEXT,
  deleted_at TIMESTAMPTZ
);

-- Index: feedback_deleted_at_idx

DROP INDEX IF EXISTS feedback_deleted_at_idx;

CREATE INDEX feedback_deleted_at_idx ON writer_key.feedback (feedback_id)
  WHERE deleted_at IS NULL;


--
-- Name: rubric2criterion; Type: TABLE; Schema: writer_key; Owner: writer_key; Tablespace: 
--

DROP TABLE IF EXISTS writer_key.rubric2criterion CASCADE;

CREATE TABLE writer_key.rubric2criterion (
  rubric_id UUID NOT NULL REFERENCES rubric(rubric_id),
  criterion_id UUID NOT NULL REFERENCES criterion(criterion_id),
  index INTEGER
);


--
-- Name: student_reflection_answer; Type: TABLE; Schema: writer_key; Owner: writer_key; Tablespace: 
--

DROP TABLE IF EXISTS writer_key.student_reflection_answer CASCADE;

CREATE TABLE writer_key.student_reflection_answer (
  student_reflection_answer_id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_draft_id UUID NOT NULL REFERENCES student_draft(student_draft_id),
  student_reflection_question_id UUID NOT NULL REFERENCES student_reflection_question(student_reflection_question_id),
  student_reflection_answer TEXT,
  created_by TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  modified_by TEXT,
  modified_at TIMESTAMPTZ,
  deleted_by TEXT,
  deleted_at TIMESTAMPTZ
);

-- Index: student_reflection_answer_student_draft_deleted_at_idx

DROP INDEX IF EXISTS student_reflection_answer_student_draft_deleted_at_idx;

CREATE INDEX student_reflection_answer_student_draft_deleted_at_idx ON writer_key.student_reflection_answer (student_draft_id)
  WHERE deleted_at IS NULL;


--
-- Name: student_rubric_score; Type: TABLE; Schema: writer_key; Owner: writer_key; Tablespace: 
--

DROP TABLE IF EXISTS writer_key.student_rubric_score CASCADE;

CREATE TABLE writer_key.student_rubric_score (
  student_rubric_score_id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_draft_id UUID NOT NULL REFERENCES student_draft(student_draft_id),
  rubric_id UUID NOT NULL REFERENCES rubric(rubric_id),
  criterion_id UUID NOT NULL REFERENCES criterion(criterion_id),
  score TEXT NOT NULL,
  created_by TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  modified_by TEXT,
  modified_at TIMESTAMPTZ,
  deleted_by TEXT,
  deleted_at TIMESTAMPTZ
);

-- Index: student_rubric_score_student_draft_deleted_at_idx

DROP INDEX IF EXISTS student_rubric_score_student_draft_deleted_at_idx;

CREATE INDEX student_rubric_score_student_draft_deleted_at_idx ON writer_key.student_rubric_score (student_draft_id)
  WHERE deleted_at IS NULL;
