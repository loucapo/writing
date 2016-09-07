import { Schema, arrayOf } from 'normalizr';

const courseSchema = new Schema('courses', { idAttribute: 'externalId' });
const sectionSchema = new Schema('sections', { idAttribute: 'externalId' });
const assignmentSchema = new Schema('assignments', { idAttribute: 'externalId' });


courseSchema.define({
  sections: arrayOf(sectionSchema)
});

sectionSchema.define({
  assignments: arrayOf(assignmentSchema)
});

assignmentSchema.define({});

export {
  courseSchema,
  sectionSchema,
  assignmentSchema
};

