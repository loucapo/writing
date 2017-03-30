
ALTER TABLE "writer_key"."activity" ADD COLUMN "prompt" jsonb;
ALTER TABLE "writer_key"."activity" ADD COLUMN "modified_by_id" text;
ALTER TABLE "writer_key"."activity" ADD COLUMN "modified_date" date;
