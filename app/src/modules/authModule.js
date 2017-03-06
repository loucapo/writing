import jwtDecode from 'jwt-decode';

const token = document.getElementById('token').getAttribute('data-val');
const authValues = jwtDecode(token);
const auth = {
  id: authValues.user_data.id,
  asId: authValues.user_data.as_id,
  firstName: authValues.user_data.first_name,
  lastName: authValues.user_data.last_name,
  fullName: `${authValues.user_data.first_name} ${authValues.user_data.last_name}`,
  role: authValues.user_data.role,
  activity: {
    activityId: authValues.launch_data.resource_link_id
  }
};
// Reducer
export default (state = auth) => {
  return state;
};
