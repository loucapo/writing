import { CALL_API } from 'redux-api-middleware';
import {config} from './../utilities/configValues';
export const STUDENT_SUBMISSION_REQUEST = 'wk_frontend/studentSubmission/STUDENT_SUBMISSION_REQUEST ';
export const STUDENT_SUBMISSION_SUCCESS = 'wk_frontend/studentSubmission/STUDENT_SUBMISSION_SUCCESS';
export const STUDENT_SUBMISSION_FAILURE = 'wk_frontend/studentSubmission/STUDENT_SUBMISSION_FAILURE';
export const STUDENT_SUBMISSION_ON_CHANGE = 'wk_frontend/studentSubmission/STUDENT_SUBMISSION_ON_CHANGE';
const dummyData = {
  id: '123',
  /* eslint-disable */
  document: {
    "entityMap": {},
    "blocks": [
      {
        "key": "9kq13",
        "text": "TXTing: h8 it or wuv it",
        "type": "center",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": []
      },
      {
        "key": "38pdb",
        "text": "About 7.3 billion text messages were sent within the United States every month in 2005, up from 2.9 billion a month the previous year (Noguchi). In August 2007, there were 92.5 million (or 43 percent) of mobile users actively use short message-service (SMS), also known as text messages; and 41 million subscribers send texts nearly every day (\"M:Metrics Study\"). Just imagine how many thumbs are typing messages on a daily basis. Human beings have been communicating in shorthand languages for years using different techniques such as Morse code, smoke signals, and other encrypted codes (Barker). The difference is that texting has brought on a \"code\" that people can decipher because most abbreviations are spelled phonetically; the slang is used in everyday life, and it is extremely convenient way to communicate (Barker). There are a lot of critics who say that texting butchers the English language, however more progressive researchers have defended texting, discovering that it fits a pattern of constant developmental change and manipulation of language that happens over time and has become a new literacy for people to communicate with (O'Connor).",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": []
      },
      {
        "key": "9gb4n",
        "text": "Because texting doesn’t fit the grammar of standard English, some teachers panic and assume that texting hurts students’ ability to write well because those who text are not writing grammatically in their messages. Although there have been some instances where the \"texting slang\" has been used in inappropriate places, there is no direct correlation between people who text and poor English scores. In fact, the use of text message abbreviations is connected positively with literacy achievements (Smith). There has been research that using text abbreviations might have a correlation to children's reading and writing skills. Researchers at Coventry University have done a study on thirty-five eleven-year-olds relating their use of cell phones to their English reading, writing, and spelling skills. The researchers found that children who were better at spelling and writing were the ones who texted the most (Smith). There is no evidence to connect people who text to have a poor ability to use Standard English.",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": []
      },
      {
        "key": "2ju6c",
        "text": "Researcher Beverly Plester said in the Education Guardian Acticle: \"We are interested in discovering whether texting could be used positively to increase phonetic awareness in less able children, and perhaps increase their language skills, in a fun yet educational way,\" (Smith). Texting can be beneficial if everyone chooses to accept it.",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": []
      },
      {
        "key": "7aiea",
        "text": "Contrary to belief, student's academic writing is not being as negatively impacted by texting as people think.In the article \"Txts r gr8 but not in exams,\" Ian McNeilly, a twelve-year secondary English teacher and director of the National Association for the Teaching of English stated: \"I don't think text message and MSN messenger styles are a sign of declining standards, but changing literacies. Children are usually capable of differentiating between the two\" (Barker). It’s easy to jump to the conclusion that students are unable to learn the use of proper English and also communicate with texts. However, Dr. Crispin Thurlow , a researcher in language and communication at the University of Washington, studied 135 nineteen-year-old students at Cardiff University and analyzed 544 of their text messages. Thurlow found only 20 percent who used abbreviations in their formal writing, and 35 percent who used apostrophes incorrectly in their messages (Barker). These findings contradict the notion that students are unable to tell the difference between different registers of English. The media contributes to the false idea that \"texting slang\" is used much more frequently than actual. Tim Shortis, a PhD candidate who studies text messaging as a vernacular language at London University's Institute of Education, said \"... You get initialisms such as LOL for laugh out loud and letter and number homophones such as r and 2, but they are not as widespread as you think. There are also remarkably few casual misspellings\" (Barker).",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": []
      },
      {
        "key": "dqqpv",
        "text": "Not only do people make the wrong assumption that using texts is automatically a burden to the English language, but they also assume that texting has brought more cheating into classrooms. It is true that phones allow their users to send and receive messages relatively quickly; however, students who cheat will find a way regardless of texting. Now instead of passing notes, there is the option of sending electric messages with cellular phones. And although some students text during class, teachers are getting better at detecting when students are using their cell phones. Cheating is not a new phenomenon; it has always been an issue in school, and it will continue to be. But it is not a problem solely because of texting.",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": []
      },
      {
        "key": "8nt5s",
        "text": "Texting has shown students a way to practice their writing skills outside of class; it is a convenient way for many people to communicate, which in tum, has brought the written word back into our lives. People are able to express any thought, feeling, emotion into a small message to anyone they want. No longer do you have to wait to write something, nor do you have to wait for someone else's convenience to tell them something. Texting allows for users to tell someone a message whenever they want. This way the writer never gets frustrated, and the recipient can read the message whenever they feel it is necessary. Telling an individual (or group) something no longer has to disrupt anyone.",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": []
      },
      {
        "key": "23uhh",
        "text": "Texting also makes talking about difficult circumstances easier because it takes away the external part of communication such as body language or tone. You don't get the personal signs that you would in a face to face conversation or on the phone. You can't tell the difference in their voice or use facial cues for hints on how to take something. This is also why conversations can be misinterpreted. But people misinterpret others in face to face conversations as well. Obviously misinterpretation is not a significant problem because texting is getting more popular and easier.",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": []
      },
      {
        "key": "8dgjc",
        "text": "The texting technology has not only made texting easier, but it has also allowed young people to become more comfortable with writing daily. In the preceding generations the written word was not used in daily routines. The phone had taken that skill away, but as technology advanced, so did the type of communication. E-mails and Instant Messaging made writing to people Jess intimidating, and hassle-free. And now with texting, this generation has shown improvement in their writing ability. They write more and are able to explain their thoughts and feelings with words (O'Connor). Even though it might not be in the best grammar, kids are getting practice with writing, and it is showing. Adolescents have now surrounded themselves with less formal writing, but this way it corresponds more with their minds, and they are familiarizing themselves with the written language.",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": []
      },
      {
        "key": "7nhct",
        "text": "Whether people like it or not, texting and its language are not going to go away anytime soon. This generation is going to use it and become more comfortable with communicating via texting. It has shown the continuation of development in the English language and has proven to have a large impact on today's world. Though texting is a distraction when abused, it has helped put the written word back into our lives making people more comfortable with the skill of writing. & its a fast, EZ way 2 communic8.",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": []
      }
    ]
  }
  /* eslint-enable */
};
// Reducer
export default (state = [dummyData], action) => {
  switch (action.type) {
    case STUDENT_SUBMISSION_ON_CHANGE: {
      return state.map(x => {
        if(x.id === action.value.id) {
          x.document = action.value.document;
        }
        return x;
      });
    }
    case STUDENT_SUBMISSION_REQUEST: {
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
export function getStudentSubmissionAction(id) {
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

export function submissionOnChange(value) {
  return {
    type: STUDENT_SUBMISSION_ON_CHANGE,
    value
  };
}
