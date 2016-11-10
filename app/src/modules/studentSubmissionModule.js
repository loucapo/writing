import { CALL_API } from 'redux-api-middleware';
import {config} from './../utilities/configValues';
export const STUDENT_SUBMISSION_REQUEST = 'wk_frontend/studentSubmission/STUDENT_SUBMISSION_REQUEST ';
export const STUDENT_SUBMISSION_SUCCESS = 'wk_frontend/studentSubmission/STUDENT_SUBMISSION_SUCCESS';
export const STUDENT_SUBMISSION_FAILURE = 'wk_frontend/studentSubmission/STUDENT_SUBMISSION_FAILURE';

const dummyData = {
  id: '123',
  /*eslint-disable */
  document: `<p>TXTing: h8 it or luv it</p>
<p>About 7.3 billion text messages were sent within the United States every month in 2005, up from 2.9 billion a month the previous year (Noguchi). In August 2007, there were 92.5 million (or 43 percent) of mobile users actively use short message-service (SMS), also known as text messages; and 41 million subscribers send texts nearly every day ("M:Metrics Study"). Just imagine how many thumbs are typing messages on a daily basis. Human beings have been communicating in shorthand languages for years using different techniques such as Morse code, smoke signals, and other encrypted codes (Barker). The difference is that texting has brought on a "code" that people can decipher because most<br />abbreviations are spelled phonetically; the slang is used in everyday life, and it is<br />extremely convenient way to communicate (Barker). There are a lot of critics who say that texting butchers the English language, however more progressive researchers have defended texting, discovering that it fits a pattern of constant developmental change and manipulation of language that happens over time and has become a new literacy for people to communicate with (O'Connor).</p>
<p>Because texting doesn&rsquo;t fit the grammar of standard English, some teachers panic and assume that texting hurts students&rsquo; ability to write well because those who text are not writing grammatically in their messages. Although there have been some instances where the "texting slang" has been used in inappropriate places, there is no direct correlation between people who text and poor English scores. In fact, the use of text message abbreviations is connected positively with literacy achievements (Smith). There has been research that using text abbreviations might have a correlation to children's reading and writing skills. Researchers at Coventry University have done a study on thirty-five eleven-year-olds relating their use of cell phones to their English reading, writing, and spelling skills. The researchers found that children who were better at spelling and writing were the ones who texted the most (Smith). There is no evidence to connect people who text to have a poor ability to use Standard English.</p>`
  /*eslint-enable */
};

// Reducer
export default (state = [dummyData], action) => {
  switch (action.type) {
    case STUDENT_SUBMISSION_REQUEST: {
      console.log('STUDENT_SUBMISSION_REQUEST');
      return state;
    }
    case STUDENT_SUBMISSION_SUCCESS: {
      let studentSubmission = action.payload.data.studentSubmission;
      if (!studentSubmission) {
        return state;
      }

      // update if the studentSubmission.id already is in the array
      let newState = state.map(x=> {
        return (x.id === studentSubmission.id) ? studentSubmission : x;
      });

      // add new feedbackTool otherwise
      if (state.every(x => x.id !== studentSubmission.id)) {
        newState.push(studentSubmission);
      }

      return newState;
    }
    case STUDENT_SUBMISSION_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
};

// Action
export function fetchStudentSubmissionAction(id) {
  let apiUrl = config.apiUrl + 'studentSubmission/' + id;
  return {
    [CALL_API]: {
      endpoint: apiUrl,
      method: 'GET',
      bailOut: true,
      types: [
        STUDENT_SUBMISSION_REQUEST,
        STUDENT_SUBMISSION_SUCCESS,
        STUDENT_SUBMISSION_FAILURE
      ]
    }
  };
}

