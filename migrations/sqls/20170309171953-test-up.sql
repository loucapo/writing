/* Replace with your SQL commands */
ALTER TABLE "writer_key"."activity" RENAME COLUMN "courseid" to "course_id";
ALTER TABLE "writer_key"."activity" RENAME COLUMN "createdbyid" to "created_by_id";
ALTER TABLE "writer_key"."activity" RENAME COLUMN "createddate" to "created_date";

DROP TABLE IF EXISTS "writer_key"."course";
DROP TABLE IF EXISTS "writer_key"."user";
DROP TABLE IF EXISTS "writer_key"."writer_key";

