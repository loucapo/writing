import { COURSE_SUCCESS } from './../constants';

const assignments = (state = {}, action = null) => {
  switch (action.type) {
    case COURSE_SUCCESS: {
      const formattedAssignments = action.payload.entities.assignments;

      Reflect.ownKeys(formattedAssignments).forEach(x => {
        const ass = formattedAssignments[x];

        ass.pointsAvailable = ass.pointsAvailable ? Math.trunc(ass.pointsAvailable) : undefined;
        ass.pointsEarned = ass.pointsEarned ? Math.trunc(ass.pointsEarned) : undefined;
      });

      return Object.assign({}, state, formattedAssignments);
    }

    default:
      return state;
  }
};

export {
  assignments
};

