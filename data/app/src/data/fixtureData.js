/* eslint-disable camelcase, max-len, quotes, quote-props, key-spacing, semi */
module.exports = function(faker) {
  return function() {
    let simpleActivity = function() {
      return {
        activity_id: faker.random.uuid(),
        course_id: 123456,
        title: faker.fake(`Assignment {{random.words}}`),
        created_by: faker.random.uuid(),
        prompt: null,
        modified_by: null,
        modified_at: null
      };
    };

    //Individual fixtures by name in the below map.  Each fixture should be its own set of tables.
    return {
      threeActivity: {
        activity: [
          simpleActivity(),
          simpleActivity(),
          simpleActivity()
        ]
      },
      studentSubmittedActivity: {
        activity: [
          {
            activity_id: faker.random.uuid(),
            course_id: 123456,
            title: faker.fake(`Assignment {{random.words}}`),
            created_by: faker.random.uuid(),
            created_at: `2017-04-07`,
            prompt: null,
            modified_by: null,
            modified_at: null
          }
          //simpleActivity()
        ],
        student_activity: [
          {
            "created_at": "2017-06-01",
            "modified_by": null,
            "modified_at": null,
            "created_by": "activity:0:created_by_id",
            "student_activity_id": faker.random.uuid(),
            "activity_id": 'activity:0:activity_id',
            "student_id": "5ef7fa10-f4a4-4add-9191-882de6b9065b"
          }
        ],
        draft: [
          {
            "created_at": "2017-10-10",
            "instructions": "In this draft, focus on developing a strong working thesis and paragraphs that support the central argument laid out in your thesis.",
            "modified_by": "f3e3c2d5-cf43-4f63-924f-3ec7a125a334",
            "modified_at": null,
            "created_by": "f3e3c2d5-cf43-4f63-924f-3ec7a125a334",
            "draft_id": faker.random.uuid(),
            "activity_id": 'activity:0:activity_id',
            "index": 0
          },
          {
            "created_at": "2017-10-10",
            "instructions": "This is the final draft",
            "modified_by": "f3e3c2d5-cf43-4f63-924f-3ec7a125a334",
            "modified_at": null,
            "created_by": "f3e3c2d5-cf43-4f63-924f-3ec7a125a334",
            "draft_id": faker.random.uuid(),
            "activity_id": 'activity:0:activity_id',
            "index": 1
          }
        ],
        student_draft: [
          {
            "submitted_at": "2017-10-10",
            "created_by": "5ef7fa10-f4a4-4add-9191-882de6b9065b",
            "modified_at": "2017-10-10",
            "end_comment": null,
            "paper": "{\"blocks\":: [{\"key\":: \"vfgj\", \"data\":: {\"text-align\":: \"center\"}, \"text\":: \"TXTing:: h8 it or luv it 1\", \"type\":: \"unstyled\", \"depth\":: 0, \"entityRanges\":: [], \"inlineStyleRanges\":: []}, {\"key\":: \"dp6f1\", \"data\":: {}, \"text\":: \"\", \"type\":: \"unstyled\", \"depth\":: 0, \"entityRanges\":: [], \"inlineStyleRanges\":: []}, {\"key\":: \"1injh\", \"data\":: {}, \"text\":: \"About 7.3 billion text messages were sent within the United States every month in 2005, up from 2.9 billion a month the previous year (Noguchi). In August 2007, there were 92.5 million (or 43 percent) of mobile users actively use shortmessage-service (SMS), also known as text messages; and 41 million subscribers send texts nearly every day (\\\"M::Metrics Study\\\"). Just imagine how many thumbs are typing messages on a daily basis. Human beings have been communicating in shorthand languages for years using different techniques such as Morse code, smoke signals, and other encrypted codes (Barker). The difference is that texting has brought on a \\\"code\\\" that people can decipher because most abbreviations are spelled phonetically; the slang is used in everyday life, and it is extremely convenient way to communicate (Barker). There are a lot of critics who say that texting butchers the English language, however more progressive researchers have defended texting, discovering that it fits a pattern of constant developmental change and manipulation of language that happens over time and has become a new literacy for people to communicate with (O'Connor).\", \"type\":: \"unstyled\", \"depth\":: 0, \"entityRanges\":: [], \"inlineStyleRanges\":: []}, {\"key\":: \"4ct3t\", \"data\":: {}, \"text\":: \"Because texting doesn’t fit the grammar of standard English, some teachers panic and assume that texting hurts students’ ability to write well because those who text are not writing grammatically in their messages. Although there have been some instances where the \\\"texting slang\\\" has been used in inappropriate places, there is no direct correlation between people who text and poor English scores. In fact, the use of text message abbreviations is connected positively with literacy achievements (Smith). There has been research that using text abbreviations might have a correlation to children's reading and writing skills. Researchers at Coventry University have done a study on thirty-five eleven-year-olds relating their use of cell phones to their English reading, writing, and spelling skills. The researchers found that children who were better at spelling and writing were the ones who texted the most (Smith). There is no evidence to connect people who text to have a poor ability to use Standard English. Researcher Beverly Plester said in the Education Guardian Acticle::\\\"We are interested in discovering whether texting could be used positively to increase phonetic awareness in less able children, and perhaps increase their language skills, in a fun yet educational way,\\\" (Smith). Texting can be beneficial if everyone chooses to accept it. \", \"type\":: \"unstyled\", \"depth\":: 0, \"entityRanges\":: [], \"inlineStyleRanges\":: []}, {\"key\":: \"6uhqb\", \"data\":: {}, \"text\":: \"Contrary to belief, student's academic writing is not being as negatively impacted by texting as people think.In the article \\\"Txts r gr8 but not in exams,\\\" Ian McNeilly, a twelve-year secondary English teacher and director of the National Association for the Teaching of English stated:: \\\"I don't think text message and MSN messenger styles are a sign of declining standards, but changing literacies. Children are usually capable of differentiating between the two\\\" (Barker). It’s easy to jump to the conclusion that students are unable to learn the use of proper English and also communicate with texts. However, Dr. Crispin Thurlow , a researcher in language and communication at the University of Washington, studied 135 nineteen-year-old students at Cardiff University and analyzed 544 of their text messages. Thurlow found only 20 percent who used abbreviations in their formal writing, and 35 percent who used apostrophes incorrectly in their messages (Barker). These findings contradict the notion that students are unable to tell the difference between different registers of English. The media contributes to the false idea that \\\"texting slang\\\" is used much more frequently than actual. Tim Shortis, a PhD candidate who studies text messaging as a vernacular language at London University's Institute of Education, said \\\"... You get initialisms such as LOL for laugh out loud and letter and number homophones such as r and 2, but they are not as widespread as you think. There are also remarkably few casual misspellings\\\" (Barker).\", \"type\":: \"unstyled\", \"depth\":: 0, \"entityRanges\":: [], \"inlineStyleRanges\":: []}, {\"key\":: \"b7u5c\", \"data\":: {}, \"text\":: \"Not only do people make the wrong assumption that using texts is automatically a burden to the English language, but they also assume that texting has brought more cheating into classrooms. It is true that phones allow their users to send and receive messages relatively quickly; however, students who cheat will find a way regardless of texting. Now instead of passing notes, there is the option of sending electric messages with cellular phones. And although some students text during class, teachers are getting better at detecting when students are using their cell phones. Cheating is not a new phenomenon; it has always been an issue in school, and it will continue to be. But it is not a problem solely because of texting.\", \"type\":: \"unstyled\", \"depth\":: 0, \"entityRanges\":: [], \"inlineStyleRanges\":: []}, {\"key\":: \"9m1rs\", \"data\":: {}, \"text\":: \"Texting has shown students a way to practice their writing skills outside of class; it is a convenient way for many people to communicate, which in tum, has brought the written word back into our lives. People are able to express any thought, feeling, emotion into a small message to anyone they want. No longer do you have to wait to write something, nor do you have to wait for someone else's convenience to tell them something. Texting allows for users to tell someone a message whenever they want. This way the writer never gets frustrated, and the recipient can read the message whenever they feel it is necessary. Telling an individual (or group) something no longer has to disrupt anyone.\", \"type\":: \"unstyled\", \"depth\":: 0, \"entityRanges\":: [], \"inlineStyleRanges\":: []}, {\"key\":: \"fqfka\", \"data\":: {}, \"text\":: \"Texting also makes talking about difficult circumstances easier because it takes away the external part of communication such as body language or tone. You don't get the personal signs that you would in a face to face conversation or on the phone. You can't tell the difference in their voice or use facial cues for hints on how to take something. This is also why conversations can be misinterpreted. But people misinterpret others in face to face conversations as well. Obviously misinterpretation is not a significant problem because texting is getting more popular and easier.\", \"type\":: \"unstyled\", \"depth\":: 0, \"entityRanges\":: [], \"inlineStyleRanges\":: []}, {\"key\":: \"btmqi\", \"data\":: {}, \"text\":: \"The texting technology has not only made texting easier, but it has also allowed young people to become more comfortable with writing daily. In the preceding generations the written word was not used in daily routines. The phone had taken that skill away, but as technology advanced, so did the type of communication. E-mails and Instant Messaging made writing to people Jess intimidating, and hassle-free. And now with texting, this generation has shown improvement in their writing ability. They write more and are able to explain their thoughts and feelings with words (O'Connor). Even though it might not be in the best grammar, kids are getting practice with writing, and it is showing. Adolescents have now surrounded themselves with less formal writing, but this way it corresponds more with their minds, and they are familiarizing themselves with the written language.\", \"type\":: \"unstyled\", \"depth\":: 0, \"entityRanges\":: [], \"inlineStyleRanges\":: []}, {\"key\":: \"2am51\", \"data\":: {}, \"text\":: \"Whether people like it or not, texting and its language are not going to go away anytime soon. This generation is going to use it and become more comfortable with communicating via texting. It has shown the continuation of development in the English language and has proven to have a large impact on today's world. Though texting is a distraction when abused, it has helped put the written word back into our lives making people more comfortable with the skill of writing. & its a fast, EZ way 2 communic8.\", \"type\":: \"unstyled\", \"depth\":: 0, \"entityRanges\":: [], \"inlineStyleRanges\":: []}], \"entityMap\":: {}}",
            "created_at": "2017-10-10",
            "student_activity_id": 'student_activity:0:student_activity_id',
            "reviewed_at": null,
            "student_draft_id": faker.random.uuid(),
            "modified_by": "5ef7fa10-f4a4-4add-9191-882de6b9065b",
            "feedback_paper": null,
            "final_grade": null,
            "draft_id": 'draft:0:draft_id',
            "review_status": "notStarted",
            "status": "submitted",
            "student_id": "5ef7fa10-f4a4-4add-9191-882de6b9065b"
          }
        ],
        draft_student_reflection_question: [
          {
            "draft_id": 'draft:0:draft_id',
            "index": 0,
            "student_reflection_question_id": "823955a1-0a8e-42cc-b24c-cb30afcac93f"
          }
        ],
        draft2goal: [
          {
            "draft_id": 'draft:0:draft_id',
            "goal_id": "631fe630-663b-4738-81c0-34fc1f46c59d"
          }
        ],
        student_reflection_answer: [
          {
            "student_reflection_answer_id": faker.random.uuid(),
            "student_draft_id": 'student_draft:0:student_draft_id',
            "created_at": "2017-10-10",
            "modified_by": null,
            "modified_at": null,
            "student_reflection_answer": "how texting and writing for school are related.",
            "student_reflection_question_id": "823955a1-0a8e-42cc-b24c-cb30afcac93f",
            "created_by": "5ef7fa10-f4a4-4add-9191-882de6b9065b"
          }
        ]
      }
    };
  };
};
