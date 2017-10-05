/* eslint-disable camelcase, max-len */
module.exports = function(faker) {
  return function() {
    let simpleActivity = function() {
      return {
        activity_id: faker.random.uuid(),
        course_id: 1234,
        title: faker.fake(`Assignment {{random.words}}`),
        created_by_id: faker.random.uuid(),
        created_date: `2017-04-07`,
        prompt: null,
        modified_by_id: null,
        modified_date: null
      };
    };

    return {
      activity: [
        {
          activity_id: `d3e3c2d5-cf43-4f63-924f-3ec7a125a334`,
          course_id: 1234,
          title: 'Hello World',
          created_by_id: faker.random.uuid(),
          created_date: `2017-06-01`,
          prompt: null,
          modified_by_id: null,
          modified_date: null
        },
        simpleActivity(),
        simpleActivity(),
        simpleActivity()
      ],

      criteria: [
        {
          criteria_id: `4a7e811e-076d-488b-a523-94169c971e6d`,
          title: `Thesis`,
          description: `desco`,
          available_to_rubric: true,
          rubric_level_1: `Thesis is missing, buried, or unclear`,
          rubric_level_2: `Thesis does not present a critical response to the text`,
          rubric_level_3: `Thesis offers a judgment of the text`,
          rubric_level_4: `Thesis offers a clear and insightful judgment of the text`,
          created_by_id: `83918e6b-8918-43e0-b55f-41f126dec081`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          criteria_id: `bd500741-01d1-4ddc-b08b-dea70d55995f`,
          title: `Evidence`,
          description: `desco`,
          available_to_rubric: true,
          rubric_level_1: `Limited or no evidence`,
          rubric_level_2: `Insufficient evidence`,
          rubric_level_3: `Includes relevant evidence, though readers may need more evidence to be convinced`,
          rubric_level_4: `Well-chosen evidence informs and supports the thesis`,
          created_by_id: `d315a49f-8910-46e2-b24b-6a7a265ed8a2`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          criteria_id: `f01ed383-78e9-4089-867a-70e8911bbace`,
          title: `Interpretation/Analysis`,
          description: `desco`,
          available_to_rubric: true,
          rubric_level_1: `Limited or no analysis; does not look at how the text makes its point`,
          rubric_level_2: `Includes some discussion of how the text makes its point`,
          rubric_level_3: `Interpretation/analysis is accurate and advances the argument`,
          rubric_level_4: `Clear interpretation and insightful analysis`,
          created_by_id: `a5538cab-003c-4406-9f10-a7b423961f78`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          criteria_id: `dd6f10e6-f07d-4c70-b5c6-2a3c5e3d35e9`,
          title: `Organization`,
          description: `desco`,
          available_to_rubric: true,
          rubric_level_1: `Ideas are difficult to follow`,
          rubric_level_2: `Connection among ideas is not always clear; there may be more than one point per paragraph`,
          rubric_level_3: `Well organized on the whole, but occasionally needing work on paragraph coherence or transitions`,
          rubric_level_4: `Analysis is well organized, with clear topic sentences and transitions`,
          created_by_id: `d8cc5bd4-f1ed-401f-be68-693f6a3d9ae0`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          criteria_id: `02a8ae4e-2ae3-4390-bcb5-cadb6324567a`,
          title: `Knowledge of Conventions`,
          description: `desco`,
          available_to_rubric: true,
          rubric_level_1: `Errors in grammar, usage, or mechanics prevent understanding`,
          rubric_level_2: `Errors in grammar, usage, or mechanics detract from the writing`,
          rubric_level_3: `Sufficient control of grammar, usage, and mechanics`,
          rubric_level_4: `Fluent, controlled discussion`,
          created_by_id: `2acba63b-ee77-4a0c-9d91-2d20ee436e88`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          criteria_id: `3122600f-1c09-4f2d-bf8e-b6e84bfb6b1f`,
          title: `Thesis`,
          description: `desco`,
          available_to_rubric: true,
          rubric_level_1: `Lacks an arguable thesis`,
          rubric_level_2: `Introduces a vague or broad thesis`,
          rubric_level_3: `Introduces an arguable thesis that lacks focus`,
          rubric_level_4: `Introduces a focused, arguable thesis`,
          created_by_id: `c463f9bc-4aeb-41e8-9360-e328270f9d55`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          criteria_id: `6e6743ea-04fc-449e-8af7-8c368bf5c11c`,
          title: `Claims`,
          description: `desco`,
          available_to_rubric: true,
          rubric_level_1: `Lacks sufficient claims to support thesis`,
          rubric_level_2: `Introduces claims that do not all support the thesis`,
          rubric_level_3: `Introduces relevant claims that need further development`,
          rubric_level_4: `Claims clearly relate to thesis`,
          created_by_id: `b8857f75-df5c-458a-b1c2-f17d25aedcfd`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          criteria_id: `678ef716-4acf-42d2-bef2-583ceb891bfb`,
          title: `Evidence`,
          description: `desco`,
          available_to_rubric: true,
          rubric_level_1: `Limited or no evidence`,
          rubric_level_2: `Evidence does not support claim`,
          rubric_level_3: `Evidence supports claim`,
          rubric_level_4: `Evidence supports claims and is well-chosen`,
          created_by_id: `1edc2770-7107-4d72-903f-863f743a9162`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          criteria_id: `91db94ee-a6f1-4be5-911c-9e7b8b992531`,
          title: `Logical Appeals`,
          description: `desco`,
          available_to_rubric: true,
          rubric_level_1: `Uses weak or no appeals`,
          rubric_level_2: `Introduces an effective appeal that needs further development`,
          rubric_level_3: `Develops an effective appeal`,
          rubric_level_4: `Develops multiple effective appeals`,
          created_by_id: `c67f8f7c-36d3-4d59-b1a0-71458cb291ae`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          criteria_id: `1740b6d4-e13d-4ea0-ad17-545bb4bb9546`,
          title: `Counterargument`,
          description: `desco`,
          available_to_rubric: true,
          rubric_level_1: `Does not address counterarguments`,
          rubric_level_2: `Introduces a weak counterargument`,
          rubric_level_3: `Introduces a credible counterargument`,
          rubric_level_4: `Develops a credible counterargument and addresses it adequately`,
          created_by_id: `b2342765-decb-413f-99ca-8a828bc84048`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          criteria_id: `c54305f8-6605-4021-92e5-0a03b4ef22fe`,
          title: `Ideas/Content`,
          description: `desco`,
          available_to_rubric: true,
          rubric_level_1: `Lacks coherent ideas and sense of purpose`,
          rubric_level_2: `Ideas are present but largely disconnected from a central narrative`,
          rubric_level_3: `Tells a clear story that lacks focus on purpose`,
          rubric_level_4: `Tells a compelling story with a clear sense of purpose`,
          created_by_id: `7699e72d-eb33-44d8-81ed-09e7feb76561`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          criteria_id: `4659528b-487d-46b5-b4d6-bbc4fcd57c7f`,
          title: `Genre`,
          description: `desco`,
          available_to_rubric: true,
          rubric_level_1: `Lacks understanding of narrative conventions`,
          rubric_level_2: `Suitable understanding of some conventions mixed with misunderstanding of others`,
          rubric_level_3: `Shows a more basic understanding of narrative conventions`,
          rubric_level_4: `Chooses a relevant sequence, structure, and design`,
          created_by_id: `a9da011f-939a-49cb-83a5-90ff8002e1ca`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          criteria_id: `98f8e2b6-0252-4d33-b9e3-d11ee333250a`,
          title: `Style/Voice`,
          description: `desco`,
          available_to_rubric: true,
          rubric_level_1: `No clear sense of pacing, style, or voice present`,
          rubric_level_2: `Elements of style or voice are present but don’t support the narrative`,
          rubric_level_3: `Elements of style and voice are present but inconsistent`,
          rubric_level_4: `Well-developed sense pacing, style, and voice`,
          created_by_id: `32b5b8c4-5a1d-4c10-95a7-668a5412941f`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          criteria_id: `0d674a3e-e61c-41d9-99fb-738882f58f13`,
          title: `Word choice`,
          description: `desco`,
          available_to_rubric: true,
          rubric_level_1: `Little to no attention to details and setting`,
          rubric_level_2: `Limited attention to details and setting`,
          rubric_level_3: `Adequate attention to details and setting`,
          rubric_level_4: `Keen observation and description of details and setting`,
          created_by_id: `2ac31e44-ea3c-4664-9899-531cb558c58d`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          criteria_id: `30a2b72b-153b-449e-ae75-6d52417d5fd8`,
          title: `Conclusion`,
          description: `desco`,
          available_to_rubric: true,
          rubric_level_1: `No clear sense of importance of what has been narrated`,
          rubric_level_2: `Importance of experiences conveyed does not support the rest of the narrative`,
          rubric_level_3: `Attempts to convey the importance of  the writer's experiences`,
          rubric_level_4: `Clearly evokes the importance of the writer's experiences`,
          created_by_id: `2c5e1376-916e-4708-b06d-27fe1878af47`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          criteria_id: `cff30bcb-0425-4d06-98d3-c22f2bd10a79`,
          title: `Issue`,
          description: `desco`,
          available_to_rubric: true,
          rubric_level_1: `Does not identify or describe a specific problem`,
          rubric_level_2: `Does not describe the problem in enough detail; readers do not see a compelling need for action`,
          rubric_level_3: `Describes a specific problem and need for action`,
          rubric_level_4: `Clearly describes a problem and communicates the nature, scope, and urgency of the problem`,
          created_by_id: `2f4abe21-613d-409d-9b4e-bf2368e81d8e`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          criteria_id: `37f0de46-357a-442b-9859-fa07fc9e47a9`,
          title: `Genre`,
          description: `desco`,
          available_to_rubric: true,
          rubric_level_1: `Lacks understanding of the genre's conventions.`,
          rubric_level_2: `Suitable understanding of some conventions mixed with misundestanding of others`,
          rubric_level_3: `Shows a basic understanding of the genre's conventions`,
          rubric_level_4: `Form and language meet the needs of the intended audience`,
          created_by_id: `098181df-e26e-425a-9927-b58fcb02f880`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          criteria_id: `dd5ee9ca-8c2c-4a81-941a-a3a0d8bb3be2`,
          title: `Support`,
          description: `desco`,
          available_to_rubric: true,
          rubric_level_1: `Limited or no support for recommendations`,
          rubric_level_2: `Lacking sufficient support for recommendations`,
          rubric_level_3: `Provides adequate support for recommendations`,
          rubric_level_4: `Incorporate appropriate evidence to convince the audience that the solution is feasible`,
          created_by_id: `565d993b-d1a4-4eb9-8e8b-68b0c7151356`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          criteria_id: `116e3415-4550-41ba-b976-883d34b844d7`,
          title: `Comparisons/Counterarguments`,
          description: `desco`,
          available_to_rubric: true,
          rubric_level_1: `Little to no attention paid to the issue's context or to alternative solutions`,
          rubric_level_2: `Limited attention paid to the issue's history or to alternative solutions`,
          rubric_level_3: `Adequately describes the history of the issue and mentions alternative solutions`,
          rubric_level_4: `Examines prior solutions and weighs all reasonable alternatives`,
          created_by_id: `7b193dca-fde5-434a-997c-a5bc4e68b954`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          criteria_id: `fb620970-3a37-4a2b-ab58-d328d8862117`,
          title: `Recommendations`,
          description: `desco`,
          available_to_rubric: true,
          rubric_level_1: `Does not make specific recommendations`,
          rubric_level_2: `Recommendations or approach is somewhat flawed`,
          rubric_level_3: `Makes recommendations that need further development`,
          rubric_level_4: `Makes realistic recommendations and provides a plausible pathway to completion`,
          created_by_id: `db9f0bcc-fdeb-462c-aadb-714ad22e2868`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        }
      ],
      rubric: [
        {
          rubric_id: `a3aa7312-68b4-43b9-85b6-fa1f52339a54`,
          title: `Analysis`,
          description: `moff darth sebulba bothan. Han mustafar calamari qui-gonn. Alderaan solo mon qui-gonn hutt
          c-3po baba moff. Boba fett moff thrawn darth tatooine dantooine. Windu darth yoda skywalker mara jango windu.
           Aayla sith wicket darth calamari darth. Skywalker hut`,
          created_by_id: `78b02e4a-551c-4ac9-958f-77f658bb8e89`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          rubric_id: `c8e363e5-7130-4cdb-8ff1-fed2d511efd2`,
          title: `Argument`,
          description: `ri jinn. Naboo luke dooku mustafar alderaan darth darth organa fett. Fett ben moff solo
          skywalker binks wicket sith coruscant. Ackbar skywalker coruscant leia hutt mandalore yoda jinn wedge.
          Jango kamino wookiee leia wedge sidious calrissian skywalker. Organa watto skywalker c-3p0 windu. Mo`,
          created_by_id: `83b8b460-73d5-457f-ae97-3ff7d047910b`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          rubric_id: `c105736c-c330-487c-be74-5a2c983095cc`,
          title: `Narrative`,
          description: `uscant maul darth mon darth darth. K-3po dantooine jinn dooku fett darth jawa palpatine wedge.
          Jade organa darth chewbacca `,
          created_by_id: `61ef3973-a29c-48ec-9a38-c4f6e78b1ce4`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        },
        {
          rubric_id: `c119e4de-b6e6-4849-9b16-7a8a1e63c7b2`,
          title: `Proposal`,
          description: `ant. Mace moff fett darth skywalker. Palpatine mon binks hutt darth. Yavin skywalker solo
          ackbar dooku. Hutt fett jabba yoda. Darth calrissian tusken raider binks kamino moff. Padmé obi-wan ben boba
          hutt mandalore w`,
          created_by_id: `c4534070-359e-4fa4-872d-12e886b3a626`,
          created_date: `2017-04-10`,
          modified_by_id: null,
          modified_date: null
        }
      ],
      rubric_criteria: [
        {
          rubric_id: `rubric:0:rubric_id`,
          criteria_id: `criteria:0:criteria_id`,
          index: 1
        },
        {
          rubric_id: `rubric:0:rubric_id`,
          criteria_id: `criteria:1:criteria_id`,
          index: 2
        },
        {
          rubric_id: `rubric:0:rubric_id`,
          criteria_id: `criteria:2:criteria_id`,
          index: 3
        },
        {
          rubric_id: `rubric:0:rubric_id`,
          criteria_id: `criteria:3:criteria_id`,
          index: 4
        },
        {
          rubric_id: `rubric:0:rubric_id`,
          criteria_id: `criteria:4:criteria_id`,
          index: 5
        },
        {
          rubric_id: `rubric:1:rubric_id`,
          criteria_id: `criteria:5:criteria_id`,
          index: 1
        },
        {
          rubric_id: `rubric:1:rubric_id`,
          criteria_id: `criteria:6:criteria_id`,
          index: 2
        },
        {
          rubric_id: `rubric:1:rubric_id`,
          criteria_id: `criteria:7:criteria_id`,
          index: 3
        },
        {
          rubric_id: `rubric:1:rubric_id`,
          criteria_id: `criteria:8:criteria_id`,
          index: 4
        },
        {
          rubric_id: `rubric:1:rubric_id`,
          criteria_id: `criteria:9:criteria_id`,
          index: 5
        },
        {
          rubric_id: `rubric:2:rubric_id`,
          criteria_id: `criteria:10:criteria_id`,
          index: 1
        },
        {
          rubric_id: `rubric:2:rubric_id`,
          criteria_id: `criteria:11:criteria_id`,
          index: 2
        },
        {
          rubric_id: `rubric:2:rubric_id`,
          criteria_id: `criteria:12:criteria_id`,
          index: 3
        },
        {
          rubric_id: `rubric:2:rubric_id`,
          criteria_id: `criteria:13:criteria_id`,
          index: 4
        },
        {
          rubric_id: `rubric:2:rubric_id`,
          criteria_id: `criteria:14:criteria_id`,
          index: 5
        },
        {
          rubric_id: `rubric:3:rubric_id`,
          criteria_id: `criteria:15:criteria_id`,
          index: 1
        },
        {
          rubric_id: `rubric:3:rubric_id`,
          criteria_id: `criteria:16:criteria_id`,
          index: 2
        },
        {
          rubric_id: `rubric:3:rubric_id`,
          criteria_id: `criteria:17:criteria_id`,
          index: 3
        },
        {
          rubric_id: `rubric:3:rubric_id`,
          criteria_id: `criteria:18:criteria_id`,
          index: 4
        },
        {
          rubric_id: `rubric:3:rubric_id`,
          criteria_id: `criteria:19:criteria_id`,
          index: 5
        }
      ],

      student_reflection_question: [
        {
          student_reflection_question_id: `60bc8787-dd48-4702-8135-bec9fd8cd623`,
          question: `The most challenging part of this assignment was`,
          question_type: `free`,
          created_by_id: `565d993b-d1a4-4eb9-8e8b-68b0c7151356`,
          created_date: `2017-04-10`
        },
        {
          student_reflection_question_id: `f1b0e2d8-21c8-4ea7-9b28-5b9be7ecf9aa`,
          question: `One thing I want my reader to understand is`,
          question_type: `free`,
          created_by_id: `565d993b-d1a4-4eb9-8e8b-68b0c7151356`,
          created_date: `2017-04-10`
        },
        {
          student_reflection_question_id: `556a98d1-bf89-4aef-9b73-81254a787af0`,
          question: `I want you to know that`,
          question_type: `free`,
          created_by_id: `565d993b-d1a4-4eb9-8e8b-68b0c7151356`,
          created_date: `2017-04-10`
        },
        {
          student_reflection_question_id: `4886a427-bf88-4d94-b3bd-721ef74333db`,
          question: `The primary argument I'm making is`,
          question_type: `free`,
          created_by_id: `565d993b-d1a4-4eb9-8e8b-68b0c7151356`,
          created_date: `2017-04-10`
        },
        {
          student_reflection_question_id: `179b9ad1-ec34-42ca-a8c3-098127fc91a8`,
          question: `One piece of evidence I want to call attention to in my essay is`,
          question_type: `free`,
          created_by_id: `565d993b-d1a4-4eb9-8e8b-68b0c7151356`,
          created_date: `2017-04-10`
        },
        {
          student_reflection_question_id: `823955a1-0a8e-42cc-b24c-cb30afcac93f`,
          question: `One idea I want to develop further is`,
          question_type: `free`,
          created_by_id: `565d993b-d1a4-4eb9-8e8b-68b0c7151356`,
          created_date: `2017-04-10`
        },
        {
          student_reflection_question_id: `1682012f-ea61-4448-8b93-6165054cbce4`,
          question: `I know the criteria that will be used for giving me feedback.`,
          question_type: `agree/disagree`,
          created_by_id: `565d993b-d1a4-4eb9-8e8b-68b0c7151356`,
          created_date: `2017-04-10`
        },
        {
          student_reflection_question_id: `562e29ca-97e0-408f-bf42-5982dda017c9`,
          question: `I reviewed my feedback on previous assignments before submitting my draft.`,
          question_type: `agree/disagree`,
          created_by_id: `565d993b-d1a4-4eb9-8e8b-68b0c7151356`,
          created_date: `2017-04-10`
        },
        {
          student_reflection_question_id: `fdf4a34b-fd26-42a1-bf03-62e881f2cc5e`,
          question: `I focused on areas of feedback I received on previous writing.`,
          question_type: `agree/disagree`,
          created_by_id: `565d993b-d1a4-4eb9-8e8b-68b0c7151356`,
          created_date: `2017-04-10`
        }
      ],
      goal: [
        {
          goal_id: '631fe630-663b-4738-81c0-34fc1f46c59d',
          title: 'Thesis',
          description: null,
          option_1: 'Needs extensive revision. Thesis is missing, unclear, or does not present a critical response to the issue.',
          option_2: 'Needs work. Thesis does not present a critical response to the issue.',
          option_3: 'Nice Job! Thesis offers a clear and insightful judgment.',
          index: 1,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          goal_id: 'b5bda75d-17c3-46ca-9a5e-7657abe5513a',
          title: 'Reason and Support',
          description: null,
          option_1: 'Needs extensive revision. Inadequate reasons/support.',
          option_2: 'Needs work. Needs additional reasons/support.',
          option_3: 'Nice Job! Reasons and evidence are convincing.',
          index: 2,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          goal_id: '5b8ab539-1c27-4e84-a3b9-bfebbabb5872',
          title: 'Interpretation/Analysis',
          description: null,
          option_1: 'Needs extensive revision. Does not look at how the source conveys its ideas.',
          option_2: 'Needs work. Incorrect/inadequate interpretation or analysis.',
          option_3: 'Nice Job! Clear interpretation and insightful analysis.',
          index: 3,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          goal_id: '865a7afd-67d7-4443-9e8b-7dea357b1f09',
          title: 'Paragraph Development',
          description: null,
          option_1: 'Needs extensive revision. Choppy and difficult to follow.',
          option_2: 'Needs work. Ideas are not always linked clearly.',
          option_3: 'Nice Job! All the sentences develop the idea and flow in a logical progression.',
          index: 4,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          goal_id: '589d64b3-87f8-45f6-aa3f-0ec29975cb7a',
          title: 'Integration of Research',
          description: null,
          option_1: 'Needs extensive revision. Research is not integrated into the paper.',
          option_2: 'Needs work. Research is included with the analysis, but not integrated into the text.',
          option_3: 'Nice Job! Research is introduced and smoothly integrated into the text.',
          index: 5,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          goal_id: 'b219dda3-287e-45a7-839c-c4354c16413f',
          title: 'Counterarguments',
          description: null,
          option_1: 'Needs extensive revision. Ignores opposing positions.',
          option_2: 'Needs work. Mentions opposing positions but does not effectively address them.',
          option_3: 'Nice Job! Expertly summarizes opposing positions and effectively counters them.',
          index: 6,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          goal_id: '74b5dc13-9e8a-45d2-a2b3-06fb1fa6d444',
          title: 'Ideas/Content',
          description: null,
          option_1: 'Needs extensive revision. Ideas need to be developed.',
          option_2: 'Needs work. Ideas are somewhat undeveloped; there may be more than one point per paragraph.',
          option_3: 'Nice Job! Fully developed ideas.',
          index: 7,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          goal_id: 'fde76c90-671d-4807-af41-fef6dc027318',
          title: 'Topic Sentence',
          description: null,
          option_1: 'Needs extensive revision. First sentence does not organize the paragraph.',
          option_2: 'Needs work. Topic sentence does not effectively state the main point.',
          option_3: 'Nice Job! Topic sentence very effectively orients the reader.',
          index: 8,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          goal_id: '66374ee1-ef6c-4f61-87a1-cb5e56067d70',
          title: 'Logical Appeals',
          description: null,
          option_1: 'Needs extensive revision. Weak or ineffective appeal.',
          option_2: 'Needs work. Introduces an effective appeal that needs further development.',
          option_3: 'Nice Job! Effective use of appeals.',
          index: 9,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          goal_id: '35e1aef8-975e-4294-bd74-5208ba20c550',
          title: 'Evidence',
          description: null,
          option_1: 'Needs extensive revision. Evidence is lacking.',
          option_2: 'Needs work. More evidence needed.',
          option_3: 'Nice Job! Evidence is convincing.',
          index: 10,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          goal_id: '6a69d1e3-b320-4769-a892-09e42c031a01',
          title: 'Style/Voice',
          description: null,
          option_1: `Needs extensive revision. Pacing, style, or voice isn't suited to the topic or purpose of the paper.`,
          option_2: 'Needs work. Elements of style or voice are present but don’t support the narrative.',
          option_3: 'Nice Job! Well-developed sense of pacing, style, and voice.',
          index: 11,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          goal_id: '774563eb-36b0-4c57-8fb7-3df4f90c8910',
          title: 'Conclusion',
          description: null,
          option_1: 'Needs extensive revision. Conclusion is unsatisfactory.',
          option_2: 'Needs work. Concludes awkwardly or abruptly, without tying together main points.',
          option_3: 'Nice Job! Ties together main points and builds upon ideas or pushes them forward.',
          index: 12,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        }
      ],

      editing_mark: [
        {
          editing_mark_id: '3156da74-4172-4f91-b476-8c22b33f74cc',
          title: 'Comma Splice',
          description: `A comma splice occurs when two independent clauses are connected by only a comma. Independent clauses can stand by themselves as sentences, but they can't be connected with just a comma.`,
          index: 1,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          editing_mark_id: '0ec95a43-b46e-4e14-b27b-d4481440ae60',
          title: 'Fragment',
          description: `A fragment is an incomplete sentence. As you might suspect, it is also an incomplete expression of a thought.
Fragments come in two varieties::
1. A dependent clause, which contains a subject and a verb but fails to express a complete thought
2. A group of words that lacks either a subject or a verb`,
          index: 2,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          editing_mark_id: '41ff9324-3322-4b51-bdaa-6dd3a17edc82',
          title: 'Usage',
          description: `If you are struggling with a usage error, this means that you're accidentally using a word incorrectly--usually because you've mistaken it for a similar word. Often times a spell-checker will not help because the mis-used word is usually not spelled incorrectly.
Here are a few common usage errors::

YOUR VS. YOU'RE
THERE VS. THEIR VS. THEY'RE
THAT VS. WHICH
TOWARD VS. TOWARDS
EFFECT VS. AFFECT
WHO VS. WHOM
THEN VS. THAN`,
          index: 3,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          editing_mark_id: 'e1c56134-45c9-40d6-ad75-af4f6ba36975',
          title: 'Pronoun Agreement',
          description: `Since pronouns take the place of nouns, it is important to use the correct pronouns so that your readers understand what you mean. There are three basic types of pronoun-antecedent agreement that will help you to write clearly::
Agreement in number (A student should plan his or her schedule carefully.) 
Agreement in person (When people exercise, they feel energized.) 
Agreement in gender (Anna ate her breakfast.)`,
          index: 4,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          editing_mark_id: '21b0da90-7433-43aa-8b93-fcce70c51e22',
          title: 'Subject-Verb Agreement',
          description: `For your sentences to make sense, your subject must agree in number with your verb. A singular subject takes a singular verb, and a plural subject takes a plural verb.`,
          index: 5,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          editing_mark_id: 'f01759ab-ba63-483a-8187-a348a862ef12',
          title: 'Appropriate Language',
          description: `The words you choose determine the tone of your work and how your reader responds to it. When you write, keep the following concerns in mind::
1. It is important to decide what tone you want to use to influence your audience’s response.
2. You must determine whether to use formal language and whether to use disciplinary language.
3. Be sure to avoid jargon and euphemisms.
4. Avoid slang in formal writing.
5. Avoid clichés.
6. Avoid sexist terms that include or imply man.`,
          index: 6,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          editing_mark_id: '999d9ca1-d762-4b38-833d-50d4520a345e',
          title: 'Needs Analysis',
          description: `Many college writing assignments ask students to think and write analytically about something they’ve viewed, read, or experienced. Describing or summarizing the “text” is a good first step, but analysis requires breaking the text down in order to make judgments and connections and to draw conclusions.`,
          index: 7,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          editing_mark_id: 'c722aeed-ce6d-4161-a12e-009087c94f5b',
          title: 'Comma Error',
          description: `A comma is punctuation that separates parts of a sentence and tells readers to pause briefly. When commas are missing--or when unnecessary commas are present--readers can become confused.`,
          index: 8,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          editing_mark_id: '91647929-b801-4c55-87e9-0d9bcd061a7d',
          title: 'Apostrophe Error',
          description: `Apostrophes have two main grammatical functions::
1. To make a noun possessive:: The team’s colors are blue and gold.
2. To replace letters in contractions:: Don't forget to use apostrophes.`,
          index: 9,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          editing_mark_id: '1204b4e9-17d2-4b7c-b381-1d4362d95906',
          title: 'Integrate Source (MLA)',
          description: `Many academic writing assignments ask you to use sources. Writing well in college often means weaving together your ideas and the ideas of your sources--being careful to make the boundaries between the two clear. When you use direct quotations from your sources, be careful not to drop them into your writing without warning to your readers. Instead, integrate your sources by building up to the borrowed material and then following up with a comment that ties the material to your point.`,
          index: 10,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          editing_mark_id: '76435288-b5c9-463c-af4e-a822635e7caa',
          title: 'Integrate Source (APA)',
          description: `Many academic writing assignments ask you to use sources. Writing well in college often means weaving together your ideas and the ideas of your sources--being careful to make the boundaries between the two clear. When you use direct quotations from your sources, be careful not to drop them into your writing without warning to your readers. Instead, integrate your sources by building up to the borrowed material and then following up with a comment that ties the material to your point.`,
          index: 11,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          editing_mark_id: 'f08bcf50-4c5a-4268-a1c5-ddea7b35585e',
          title: 'Needs Evidence',
          description: `When you are asked to use evidence (examples, data, facts, and expert testimony) to support the points you make, your challenge is to find evidence that is relevant and credible. When you do so, you become more credible as a research writer. You build your "ethos."

Make a habit of asking yourself the following questions::
Do I have data to support my claims?
What example can I include that would connect my topic to my readers?
How can I prove that I am familiar with the issue I'm writing about?
Can I identify any places in my writing where readers might need more detail?`,
          index: 12,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          editing_mark_id: '4f36b0f0-5957-4b0a-ad27-473426bf0952',
          title: 'Pronoun Reference',
          description: `In order for your sentences to have correct pronoun reference, pronouns must clearly refer to their antecedents-- that is, to the nouns that they replace.

In the sentence "The travelers presented their identification," the pronoun their clearly refers to the travelers.

Sometimes academic writers get into trouble if a pronoun could refer to more than one noun or if the antecedent doesn’t seem to be in the sentence at all.`,
          index: 13,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          editing_mark_id: '00c5bd95-aa38-4153-8bae-715cd3a3cd05',
          title: 'Quotation Marks',
          description: `In academic writing, quotation marks are most commonly used to enclose a person's exact words or to enclose the title of a short work such as an article, a short story, or a song.

Some writers get confused when they use quotation marks with other marks of punctuation; periods and commas most often go inside quotation marks.`,
          index: 14,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          editing_mark_id: '531d9133-1a76-4749-a90f-13c7d9cc9ba2',
          title: 'Spelling',
          description: `Misspelled words cause confusion for the reader. Instructors use this mark to indicate that the word you used is misspelled.`,
          index: 15,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          editing_mark_id: '6630d5e1-d554-4df9-af3e-7d1e79142379',
          title: 'Documentation (MLA)',
          description: `When borrowing ideas and words, writers must also acknowledge their sources. That means writers must document their sources so that their readers can also access them. MLA documentation style includes two parts:: in-text citation, which appears within the same sentence as the borrowed material; bibliographic citation, which appears at the end of the work in a Works Cited page.`,
          index: 16,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          editing_mark_id: 'c6dad3df-a15d-41f6-927e-40c882ddef85',
          title: 'Documentation (APA)',
          description: `When borrowing ideas and words, writers must also acknowledge their sources. That means, writers must document their sources so that readers too can access them. APA documentation includes two parts:: an in-text citation, which appears in the same sentence as the borrowed material; and a corresponding entry in the list of sources, which appears at the end of the work.`,
          index: 17,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        },
        {
          editing_mark_id: '1c37dac7-239b-49b3-bbf0-ad91f8063cfa',
          title: 'Verb Error',
          description: `Consistent verb tenses clearly establish the time of the actions being described. When a passage begins in one tense and then shifts without warning and for no reason to another, readers can be distracted and confused.`,
          index: 18,
          created_by_id: '565d993b-d1a4-4eb9-8e8b-68b0c7151356',
          created_date: '2017-04-10'
        }
      ],

      related_content: [
        {
          related_content_id: 'd4501357-8d50-4648-9be5-702aa77d2c36',
          title: 'Drafting and revising a working thesis',
          link: null
        },
        {
          related_content_id: '6265e83c-1c79-4593-9613-f4f6f14fcd62',
          title: 'Developing the thesis statement',
          link: null
        },
        {
          related_content_id: '6c0ffc64-aefb-4432-9514-930751db551a',
          title: 'Five approaches to revising thesis statements',
          link: null
        },
        {
          related_content_id: '83d483d1-1360-4aad-8c65-ec047a42614e',
          title: 'Supporting claims with evidence',
          link: null
        },
        {
          related_content_id: 'e8de9f6a-e1c4-4dbb-8707-f9c9fbcf13dc',
          title: 'Including details that support the main idea',
          link: null
        },
        {
          related_content_id: '0f57dbaf-6236-4e50-b16a-01cd941885f3',
          title: 'Using appeals (ethos, logos, pathos) as a writer',
          link: null
        },
        {
          related_content_id: 'f0108f17-cc55-47fa-9222-322b0fc194b6',
          title: 'Analyzing a written text',
          link: null
        },
        {
          related_content_id: 'bdbaed0b-f873-4f4f-b384-8e91fcf63dfa',
          title: 'Writing guide:: Analysis essay',
          link: null
        },
        {
          related_content_id: '29c10881-a2aa-4832-bc48-be17289c8cf5',
          title: 'Balancing summary with analysis for a written text',
          link: null
        },
        {
          related_content_id: 'dd128104-8683-4564-97f9-70c1c15db5c3',
          title: 'Building effective paragraphs',
          link: null
        },
        {
          related_content_id: '6edfe66b-1d46-4e17-bab7-d0ca3417a611',
          title: 'Making paragraphs coherent',
          link: null
        },
        {
          related_content_id: 'eb070111-0c59-4050-9e73-d9a6084ebc9b',
          title: 'Developing the main point',
          link: null
        },
        {
          related_content_id: '38fc70bb-edf4-4d84-b94a-c3b8d13b88d4',
          title: 'Avoiding plagiarism and integrating sources (MLA)',
          link: null
        },
        {
          related_content_id: 'f642393a-b692-4643-bfab-9a894ddf09c7',
          title: 'Synthesizing sources (MLA)',
          link: null
        },
        {
          related_content_id: '4a34d044-e42c-4741-a976-1955673af4ed',
          title: 'Managing information responsibly',
          link: null
        },
        {
          related_content_id: '3e7b0bbf-9cd9-45c5-ba3b-8b2fca11e777',
          title: 'Anticipating objections and countering opposing arguments',
          link: null
        },
        {
          related_content_id: '223d2a3f-2cfc-47f8-8294-3964303200b3',
          title: 'Building common ground',
          link: null
        },
        {
          related_content_id: '52e3610a-635c-4245-aaf4-719804a8cc87',
          title: 'Exploring the subject',
          link: null
        },
        {
          related_content_id: '59f61841-1b21-4ecd-9543-5ac59df59907',
          title: 'Drafting the body',
          link: null
        },
        {
          related_content_id: '0d66353c-30bf-4750-9551-a19f65425b52',
          title: 'Positioning the topic sentence',
          link: null
        },
        {
          related_content_id: '019a5fd0-242c-4058-9e57-ac0a164ac571',
          title: 'Linking ideas to the topic sentence',
          link: null
        },
        {
          related_content_id: '675dea3a-d38e-46e6-9e6c-9e5175134384',
          title: 'Legitimate vs. unfair emotional appeals',
          link: null
        },
        {
          related_content_id: 'c1dce89c-27ad-4fee-9cc7-8b67282f3a1b',
          title: 'Evaluating appeals (ethos, logos, pathos) as a reader',
          link: null
        },
        {
          related_content_id: '0650251f-4e26-43c5-8658-cc0719574114',
          title: 'Understanding the kinds of evidence writers in a discipline use',
          link: null
        },
        {
          related_content_id: '7548a59c-4e9f-4fb0-b80d-0f18257afea5',
          title: 'The comment:: Develop more',
          link: null
        },
        {
          related_content_id: '06789547-0f13-485d-86a0-feeabbe52c2b',
          title: 'Revising and editing sentences',
          link: null
        },
        {
          related_content_id: 'a81e21be-40f9-4dee-84a6-ca3390c19ce6',
          title: 'Drafting a conclusion',
          link: null
        },
        {
          related_content_id: 'a7269619-f371-4568-bef3-a6b1f0c0bac7',
          title: 'Effective conclusions',
          link: null
        },
        {
          related_content_id: '66105cef-daa3-456c-b720-1d15a783901e',
          title: 'Quick help:: Run-on sentences',
          link: null
        },
        {
          related_content_id: '74ddbabe-7709-4e8b-981e-d6ab223aaa13',
          title: 'Recognizing run-on sentences',
          link: null
        },
        {
          related_content_id: '9b8e2d6d-2a09-4d4e-b231-0951d08fbf18',
          title: 'Revising run-on sentences',
          link: null
        },
        {
          related_content_id: 'b3c3b471-267e-4e71-8fc3-af5671d8c9e2',
          title: 'Quick help:: Sentence fragments',
          link: null
        },
        {
          related_content_id: 'fd32788e-fe31-4fee-a653-ac492f7a12e8',
          title: 'Sentence fragments:: Overview',
          link: null
        },
        {
          related_content_id: 'adffb4bb-bc90-465a-91df-f565f9e53788',
          title: 'Test for sentence fragments',
          link: null
        },
        {
          related_content_id: 'a9be6a8f-b294-4686-b9fe-6e77123960e4',
          title: 'Glossary of usage',
          link: null
        },
        {
          related_content_id: '265eb15b-5d32-4e1e-a3a5-022ce1ac5d9d',
          title: 'Consulting the dictionary and the thesaurus',
          link: null
        },
        {
          related_content_id: '3840d509-77ff-47cf-b3ed-86a744f2e827',
          title: 'Misused words',
          link: null
        },
        {
          related_content_id: '61e992c1-9b9f-4397-8eff-0e821d68bca9',
          title: 'Quick help:: Pronoun agreement and reference',
          link: null
        },
        {
          related_content_id: '1efec056-e2bc-4aab-b6d6-e1a181093b75',
          title: 'Pronoun-antecedent agreement',
          link: null
        },
        {
          related_content_id: '9bc853fa-5616-4da6-9a64-8543f95ce7be',
          title: 'Quick help:: Subject-verb agreement',
          link: null
        },
        {
          related_content_id: '7760095d-5243-4726-b448-ec7000ef3fde',
          title: 'Standard subject-verb combinations',
          link: null
        },
        {
          related_content_id: 'e66d5eed-9da3-4d40-8e46-ad773f235321',
          title: 'Subject-verb agreement at a glance',
          link: null
        },
        {
          related_content_id: '1481c2b8-da57-4631-b6fc-fa731df4b94b',
          title: 'Quick help:: Appropriate language',
          link: null
        },
        {
          related_content_id: 'a3c17c5e-27c4-45c6-8b6c-1c7d21f21f8c',
          title: 'Quick help:: Exact language',
          link: null
        },
        {
          related_content_id: '51c08f8a-b191-4e7f-9c84-334e459463ca',
          title: 'Using an appropriate level of formality',
          link: null
        },
        {
          related_content_id: 'b7cbd004-db22-4820-9c95-b62e37482d88',
          title: 'The comment:: Summarize less, analyze more',
          link: null
        },
        {
          related_content_id: '1b76367f-0d59-4bc5-b95c-8bc8831def5e',
          title: 'Quick help:: Commas',
          link: null
        },
        {
          related_content_id: '86bd2b64-269c-44e9-bcf2-4303079137aa',
          title: 'The comma:: Overview',
          link: null
        },
        {
          related_content_id: 'bd55b2ef-b97b-4396-966b-d226dcbbd16f',
          title: 'Quick help:: Unnecessary commas',
          link: null
        },
        {
          related_content_id: '476ace37-7113-41b9-81b6-868a14e1fc0b',
          title: 'Quick help:: Apostrophes',
          link: null
        },
        {
          related_content_id: '10ec5d78-d5ef-40c9-b202-b3d2fae6721e',
          title: 'Apostrophe in possessives',
          link: null
        },
        {
          related_content_id: 'fb1a3e03-e9d3-4d5a-89b3-8415bcdd7c65',
          title: 'Common misuses of the apostrophe',
          link: null
        },
        {
          related_content_id: '69bc0f3b-6e98-4c04-bc67-4fdda40a223a',
          title: 'Summarizing and paraphrasing in your own words (MLA)',
          link: null
        },
        {
          related_content_id: '74763455-e1c2-4923-b9db-ba8e233f59c4',
          title: 'Using signal phrases to integrate sources (MLA)',
          link: null
        },
        {
          related_content_id: 'd4b44f9a-89f5-4d31-890a-0acb6525fd72',
          title: 'Avoiding plagiarism and integrating sources (APA)',
          link: null
        },
        {
          related_content_id: '3d288b58-fdc6-4c5c-9b86-9df99d76c6c1',
          title: 'Summarizing and paraphrasing in your own words (APA)',
          link: null
        },
        {
          related_content_id: '6e5851fe-3285-45bd-a4f5-7281cee624d8',
          title: 'Using signal phrases to integrate sources (APA)',
          link: null
        },
        {
          related_content_id: '75ce335d-78ae-403d-88ee-8d8710c937af',
          title: 'Pronoun reference',
          link: null
        },
        {
          related_content_id: '750e3c9f-4569-4a16-8651-c7af9bae6fc9',
          title: 'Quick help:: Quotation marks',
          link: null
        },
        {
          related_content_id: '6d22f699-e886-4041-a52b-60c526e216c3',
          title: 'Quotation marks with other punctuation',
          link: null
        },
        {
          related_content_id: '79255345-0447-4dd4-bc5c-df8a3909c7d3',
          title: 'Misuses of quotation marks',
          link: null
        },
        {
          related_content_id: '3f3e4428-3903-49f2-aad3-b0eef899553f',
          title: 'Commonly misspelled words',
          link: null
        },
        {
          related_content_id: '6b1e4c98-c58b-427d-a9b7-f1d4ca2f097a',
          title: 'Spelling rules',
          link: null
        },
        {
          related_content_id: '114c5685-c8d7-4a2a-a33b-dcc1926643a1',
          title: 'Words that sound alike but have different spellings (homophones)',
          link: null
        },
        {
          related_content_id: 'f54fb1ad-ec9d-4e87-8df3-940aa22c15bc',
          title: 'Quick help:: MLA works cited',
          link: null
        },
        {
          related_content_id: '4aef3aba-9927-4c0e-8f69-04a54e1665f4',
          title: 'Citation at a glance and other models (MLA)',
          link: null
        },
        {
          related_content_id: '4956c36f-5e5a-4cb3-881a-616e62d572f5',
          title: 'Formatting an MLA research paper; sample student writing',
          link: null
        },
        {
          related_content_id: '32bd1e60-85b8-49df-b7c2-fca9a26d2ee7',
          title: 'APA Style:: Overview',
          link: null
        },
        {
          related_content_id: 'aeb24ff6-3b48-4316-abd4-113365132d23',
          title: 'APA in-text citations',
          link: null
        },
        {
          related_content_id: '5467ae48-283e-4356-9323-387007ad3d5c',
          title: 'Directory to APA reference list models',
          link: null
        },
        {
          related_content_id: 'b123b90b-5d53-48c5-96e8-9e890aaf6225',
          title: 'Quick help:: Verbs',
          link: null
        },
        {
          related_content_id: 'c56e9383-2bc8-4a88-b92b-511962e6d2c0',
          title: 'Shifts in verb tense, mood, and voice',
          link: null
        },
        {
          related_content_id: 'a54bbce8-c4d1-4f35-9127-7726253f41ec',
          title: 'Verb form and tense',
          link: null
        }
      ],

      goal2related_content: [
        {
          goal_id: 'goal:0:goal_id',
          related_content_id: 'related_content:0:related_content_id',
          index: 1
        },
        {
          goal_id: 'goal:0:goal_id',
          related_content_id: 'related_content:1:related_content_id',
          index: 2
        },
        {
          goal_id: 'goal:0:goal_id',
          related_content_id: 'related_content:2:related_content_id',
          index: 3
        },
        {
          goal_id: 'goal:1:goal_id',
          related_content_id: 'related_content:3:related_content_id',
          index: 1
        },
        {
          goal_id: 'goal:1:goal_id',
          related_content_id: 'related_content:4:related_content_id',
          index: 2
        },
        {
          goal_id: 'goal:1:goal_id',
          related_content_id: 'related_content:5:related_content_id',
          index: 3
        },
        {
          goal_id: 'goal:2:goal_id',
          related_content_id: 'related_content:6:related_content_id',
          index: 1
        },
        {
          goal_id: 'goal:2:goal_id',
          related_content_id: 'related_content:7:related_content_id',
          index: 2
        },
        {
          goal_id: 'goal:2:goal_id',
          related_content_id: 'related_content:8:related_content_id',
          index: 3
        },
        {
          goal_id: 'goal:3:goal_id',
          related_content_id: 'related_content:9:related_content_id',
          index: 1
        },
        {
          goal_id: 'goal:3:goal_id',
          related_content_id: 'related_content:10:related_content_id',
          index: 2
        },
        {
          goal_id: 'goal:3:goal_id',
          related_content_id: 'related_content:11:related_content_id',
          index: 3
        },
        {
          goal_id: 'goal:4:goal_id',
          related_content_id: 'related_content:12:related_content_id',
          index: 1
        },
        {
          goal_id: 'goal:4:goal_id',
          related_content_id: 'related_content:13:related_content_id',
          index: 2
        },
        {
          goal_id: 'goal:4:goal_id',
          related_content_id: 'related_content:14:related_content_id',
          index: 3
        },
        {
          goal_id: 'goal:5:goal_id',
          related_content_id: 'related_content:15:related_content_id',
          index: 1
        },
        {
          goal_id: 'goal:5:goal_id',
          related_content_id: 'related_content:16:related_content_id',
          index: 2
        },
        {
          goal_id: 'goal:5:goal_id',
          related_content_id: 'related_content:5:related_content_id',
          index: 3
        },
        {
          goal_id: 'goal:6:goal_id',
          related_content_id: 'related_content:17:related_content_id',
          index: 1
        },
        {
          goal_id: 'goal:6:goal_id',
          related_content_id: 'related_content:18:related_content_id',
          index: 2
        },
        {
          goal_id: 'goal:6:goal_id',
          related_content_id: 'related_content:11:related_content_id',
          index: 3
        },
        {
          goal_id: 'goal:7:goal_id',
          related_content_id: 'related_content:19:related_content_id',
          index: 1
        },
        {
          goal_id: 'goal:7:goal_id',
          related_content_id: 'related_content:20:related_content_id',
          index: 2
        },
        {
          goal_id: 'goal:7:goal_id',
          related_content_id: 'related_content:11:related_content_id',
          index: 3
        },
        {
          goal_id: 'goal:8:goal_id',
          related_content_id: 'related_content:5:related_content_id',
          index: 1
        },
        {
          goal_id: 'goal:8:goal_id',
          related_content_id: 'related_content:21:related_content_id',
          index: 2
        },
        {
          goal_id: 'goal:8:goal_id',
          related_content_id: 'related_content:22:related_content_id',
          index: 3
        },
        {
          goal_id: 'goal:9:goal_id',
          related_content_id: 'related_content:3:related_content_id',
          index: 1
        },
        {
          goal_id: 'goal:9:goal_id',
          related_content_id: 'related_content:23:related_content_id',
          index: 2
        },
        {
          goal_id: 'goal:10:goal_id',
          related_content_id: 'related_content:24:related_content_id',
          index: 1
        },
        {
          goal_id: 'goal:10:goal_id',
          related_content_id: 'related_content:10:related_content_id',
          index: 2
        },
        {
          goal_id: 'goal:10:goal_id',
          related_content_id: 'related_content:25:related_content_id',
          index: 3
        },
        {
          goal_id: 'goal:11:goal_id',
          related_content_id: 'related_content:26:related_content_id',
          index: 1
        },
        {
          goal_id: 'goal:11:goal_id',
          related_content_id: 'related_content:27:related_content_id',
          index: 2
        }
      ],

      editing_mark2related_content: [
        {
          editing_mark_id: 'editing_mark:0:editing_mark_id',
          related_content_id: 'related_content:28:related_content_id',
          index: 1
        },
        {
          editing_mark_id: 'editing_mark:0:editing_mark_id',
          related_content_id: 'related_content:29:related_content_id',
          index: 2
        },
        {
          editing_mark_id: 'editing_mark:0:editing_mark_id',
          related_content_id: 'related_content:30:related_content_id',
          index: 3
        },
        {
          editing_mark_id: 'editing_mark:1:editing_mark_id',
          related_content_id: 'related_content:31:related_content_id',
          index: 1
        },
        {
          editing_mark_id: 'editing_mark:1:editing_mark_id',
          related_content_id: 'related_content:32:related_content_id',
          index: 2
        },
        {
          editing_mark_id: 'editing_mark:1:editing_mark_id',
          related_content_id: 'related_content:33:related_content_id',
          index: 3
        },
        {
          editing_mark_id: 'editing_mark:2:editing_mark_id',
          related_content_id: 'related_content:34:related_content_id',
          index: 1
        },
        {
          editing_mark_id: 'editing_mark:2:editing_mark_id',
          related_content_id: 'related_content:35:related_content_id',
          index: 2
        },
        {
          editing_mark_id: 'editing_mark:2:editing_mark_id',
          related_content_id: 'related_content:36:related_content_id',
          index: 3
        },
        {
          editing_mark_id: 'editing_mark:3:editing_mark_id',
          related_content_id: 'related_content:37:related_content_id',
          index: 1
        },
        {
          editing_mark_id: 'editing_mark:3:editing_mark_id',
          related_content_id: 'related_content:38:related_content_id',
          index: 2
        },
        {
          editing_mark_id: 'editing_mark:4:editing_mark_id',
          related_content_id: 'related_content:39:related_content_id',
          index: 1
        },
        {
          editing_mark_id: 'editing_mark:4:editing_mark_id',
          related_content_id: 'related_content:40:related_content_id',
          index: 2
        },
        {
          editing_mark_id: 'editing_mark:4:editing_mark_id',
          related_content_id: 'related_content:41:related_content_id',
          index: 3
        },
        {
          editing_mark_id: 'editing_mark:5:editing_mark_id',
          related_content_id: 'related_content:42:related_content_id',
          index: 1
        },
        {
          editing_mark_id: 'editing_mark:5:editing_mark_id',
          related_content_id: 'related_content:43:related_content_id',
          index: 2
        },
        {
          editing_mark_id: 'editing_mark:5:editing_mark_id',
          related_content_id: 'related_content:44:related_content_id',
          index: 3
        },
        {
          editing_mark_id: 'editing_mark:6:editing_mark_id',
          related_content_id: 'related_content:8:related_content_id',
          index: 1
        },
        {
          editing_mark_id: 'editing_mark:6:editing_mark_id',
          related_content_id: 'related_content:45:related_content_id',
          index: 2
        },
        {
          editing_mark_id: 'editing_mark:6:editing_mark_id',
          related_content_id: 'related_content:6:related_content_id',
          index: 3
        },
        {
          editing_mark_id: 'editing_mark:7:editing_mark_id',
          related_content_id: 'related_content:46:related_content_id',
          index: 1
        },
        {
          editing_mark_id: 'editing_mark:7:editing_mark_id',
          related_content_id: 'related_content:47:related_content_id',
          index: 2
        },
        {
          editing_mark_id: 'editing_mark:7:editing_mark_id',
          related_content_id: 'related_content:48:related_content_id',
          index: 3
        },
        {
          editing_mark_id: 'editing_mark:8:editing_mark_id',
          related_content_id: 'related_content:49:related_content_id',
          index: 1
        },
        {
          editing_mark_id: 'editing_mark:8:editing_mark_id',
          related_content_id: 'related_content:50:related_content_id',
          index: 2
        },
        {
          editing_mark_id: 'editing_mark:8:editing_mark_id',
          related_content_id: 'related_content:51:related_content_id',
          index: 3
        },
        {
          editing_mark_id: 'editing_mark:9:editing_mark_id',
          related_content_id: 'related_content:12:related_content_id',
          index: 1
        },
        {
          editing_mark_id: 'editing_mark:9:editing_mark_id',
          related_content_id: 'related_content:52:related_content_id',
          index: 2
        },
        {
          editing_mark_id: 'editing_mark:9:editing_mark_id',
          related_content_id: 'related_content:53:related_content_id',
          index: 3
        },
        {
          editing_mark_id: 'editing_mark:10:editing_mark_id',
          related_content_id: 'related_content:54:related_content_id',
          index: 1
        },
        {
          editing_mark_id: 'editing_mark:10:editing_mark_id',
          related_content_id: 'related_content:55:related_content_id',
          index: 2
        },
        {
          editing_mark_id: 'editing_mark:10:editing_mark_id',
          related_content_id: 'related_content:56:related_content_id',
          index: 3
        },
        {
          editing_mark_id: 'editing_mark:11:editing_mark_id',
          related_content_id: 'related_content:3:related_content_id',
          index: 1
        },
        {
          editing_mark_id: 'editing_mark:11:editing_mark_id',
          related_content_id: 'related_content:23:related_content_id',
          index: 2
        },
        {
          editing_mark_id: 'editing_mark:12:editing_mark_id',
          related_content_id: 'related_content:37:related_content_id',
          index: 1
        },
        {
          editing_mark_id: 'editing_mark:12:editing_mark_id',
          related_content_id: 'related_content:57:related_content_id',
          index: 2
        },
        {
          editing_mark_id: 'editing_mark:13:editing_mark_id',
          related_content_id: 'related_content:58:related_content_id',
          index: 1
        },
        {
          editing_mark_id: 'editing_mark:13:editing_mark_id',
          related_content_id: 'related_content:59:related_content_id',
          index: 2
        },
        {
          editing_mark_id: 'editing_mark:13:editing_mark_id',
          related_content_id: 'related_content:60:related_content_id',
          index: 3
        },
        {
          editing_mark_id: 'editing_mark:14:editing_mark_id',
          related_content_id: 'related_content:61:related_content_id',
          index: 1
        },
        {
          editing_mark_id: 'editing_mark:14:editing_mark_id',
          related_content_id: 'related_content:62:related_content_id',
          index: 2
        },
        {
          editing_mark_id: 'editing_mark:14:editing_mark_id',
          related_content_id: 'related_content:63:related_content_id',
          index: 3
        },
        {
          editing_mark_id: 'editing_mark:15:editing_mark_id',
          related_content_id: 'related_content:64:related_content_id',
          index: 1
        },
        {
          editing_mark_id: 'editing_mark:15:editing_mark_id',
          related_content_id: 'related_content:65:related_content_id',
          index: 2
        },
        {
          editing_mark_id: 'editing_mark:15:editing_mark_id',
          related_content_id: 'related_content:66:related_content_id',
          index: 3
        },
        {
          editing_mark_id: 'editing_mark:16:editing_mark_id',
          related_content_id: 'related_content:67:related_content_id',
          index: 1
        },
        {
          editing_mark_id: 'editing_mark:16:editing_mark_id',
          related_content_id: 'related_content:68:related_content_id',
          index: 2
        },
        {
          editing_mark_id: 'editing_mark:16:editing_mark_id',
          related_content_id: 'related_content:69:related_content_id',
          index: 3
        },
        {
          editing_mark_id: 'editing_mark:17:editing_mark_id',
          related_content_id: 'related_content:70:related_content_id',
          index: 1
        },
        {
          editing_mark_id: 'editing_mark:17:editing_mark_id',
          related_content_id: 'related_content:71:related_content_id',
          index: 2
        },
        {
          editing_mark_id: 'editing_mark:17:editing_mark_id',
          related_content_id: 'related_content:72:related_content_id',
          index: 3
        }
      ],

      draft: [
        {
          draft_id: `e8ce0d9c-9824-4028-b0d7-ecaabb0bcae5`,
          activity_id: 'activity:0:activity_id',
          index: 0,
          created_by_id: `f3e3c2d5-cf43-4f63-924f-3ec7a125a334`,
          created_date: `2017-05-30`,
          modified_by_id: 'f3e3c2d5-cf43-4f63-924f-3ec7a125a334'
        }
      ],
      student_activity: [
        {
          student_activity_id: `f0d2123e-2e10-4138-8af8-f93499eb02f0`,
          activity_id: 'activity:0:activity_id',
          student_id: '5ef7fa10-f4a4-4add-9191-882de6b9065b',
          created_by_id: `5ef7fa10-f4a4-4add-9191-882de6b9065b`,
          created_date: `2017-06-01`
        }
      ],
      student_draft: [
        {
          student_draft_id: `b9c60aa4-476a-4eae-9bc0-e8f026ef3ea2`,
          student_activity_id: `f0d2123e-2e10-4138-8af8-f93499eb02f0`,
          student_id: '5ef7fa10-f4a4-4add-9191-882de6b9065b',
          draft_id: 'd3e3c2d5-cf43-4f63-924f-3ec7a125a335',
          created_by_id: `5ef7fa10-f4a4-4add-9191-882de6b9065b`,
          created_date: `2017-06-01`,
          status: `active`
        }
      ]
    };
  };
};
