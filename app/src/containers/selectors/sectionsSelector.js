export default (state, { params }) => {
    const id = params.id;
    const result = { sections: [] };
    const course = state.courses[id];

    result.sections = course.sections.map(sectionId => state.sections[sectionId]);
    return result;
};
