import jwtDecode from 'jwt-decode';
import cookie from 'react-cookie';

const token = cookie.load('wt_jwt'); //XXX should die here if not there.;
const authValues = jwtDecode(token);
const auth = {
  id: authValues.user_data.id,
  asId: authValues.user_data.as_id,
  firstName: authValues.user_data.first_name,
  lastName: authValues.user_data.last_name,
  fullName: `${authValues.user_data.first_name} ${authValues.user_data.last_name}`,
  role: authValues.course_data.course_1002.writing, //XXX this needs to be dynamic based on course
  activity: {
    activityId: authValues.launch_data.resource_link_id //XXX this needs to come from the URL
  }
};
// Reducer
export default (state = auth) => {
  return state;
};
