import { Schema, arrayOf } from 'normalizr';

const courseSchema = new Schema('courses');
const sectionSchema = new Schema('sections');
const assignmentSchema = new Schema('assignments');


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
