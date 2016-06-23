export default (state) => {
    const result = { sections: [] };

    const course = state.courses[state.currentCourse];

    result.sections = course.sections.map(sectionId => state.sections[sectionId]);

    return result;
};
