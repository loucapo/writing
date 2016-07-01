export default (state, { params }) => {
    const id = params.id;
    const result = { sections: [] };
    const course = state.courses[id];
    if (!course) { return result; }
    result.sections = course.sections.map(sectionId => state.sections[sectionId]);
    return result;
};
